import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { leadSchema, contactSchema } from '../validation/publicSchemas';
import {
  insertLead,
  insertContactMessage,
  updateLeadNotify,
  updateContactNotify,
} from '../services/supabase';
import { notifyTeamSmsOztek } from '../services/notifySmsOztek';

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  return typeof err === 'string' ? err : 'Unknown error';
}

function truncate(s: string, max = 600): string {
  if (s.length <= max) return s;
  return `${s.slice(0, max)}...`;
}

const router = Router();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
});

router.use(limiter);

router.post('/leads', async (req, res, next) => {
  try {
    const input = leadSchema.parse(req.body);

    const ip = req.ip;
    const userAgent = req.get('user-agent') ?? undefined;

    const { id, createdAt } = await insertLead({
      company: input.company,
      name: input.name,
      email: input.email,
      phone: input.phone,
      consent: input.consent,
      page_url: input.pageUrl,
      ip,
      user_agent: userAgent,
      notify_status: 'pending',
    });

    res.status(201).json({ id, createdAt });

    void (async () => {
      const msgLines = [
        'PSW: Yeni onizleme talebi',
        `Firma: ${input.company}`,
        `Yetkili: ${input.name}`,
        `Tel: ${input.phone}`,
        `E-posta: ${input.email}`,
        input.pageUrl ? `Sayfa: ${input.pageUrl}` : null,
        `Kayit: ${createdAt}`,
        `ID: ${id}`,
      ].filter(Boolean);

      try {
        await notifyTeamSmsOztek(msgLines.join('\n'));
        await updateLeadNotify(id, 'sent', null);
      } catch (err) {
        const errMsg = truncate(getErrorMessage(err), 1000);
        try {
          await updateLeadNotify(id, 'failed', errMsg);
        } catch (updateErr) {
          console.error('Failed to update lead notify status:', updateErr);
        }
      }
    })();
  } catch (err) {
    next(err);
  }
});

router.post('/contact', async (req, res, next) => {
  try {
    const input = contactSchema.parse(req.body);

    const ip = req.ip;
    const userAgent = req.get('user-agent') ?? undefined;

    const { id, createdAt } = await insertContactMessage({
      name: input.name,
      phone: input.phone,
      email: input.email,
      message: input.message,
      kvkk: input.kvkk,
      page_url: input.pageUrl,
      ip,
      user_agent: userAgent,
      notify_status: 'pending',
    });

    res.status(201).json({ id, createdAt });

    void (async () => {
      const msgLines = [
        'PSW: Yeni iletisim mesaji',
        `Ad: ${input.name}`,
        `Tel: ${input.phone}`,
        `E-posta: ${input.email}`,
        `Mesaj: ${truncate(input.message, 600)}`,
        input.pageUrl ? `Sayfa: ${input.pageUrl}` : null,
        `Kayit: ${createdAt}`,
        `ID: ${id}`,
      ].filter(Boolean);

      try {
        await notifyTeamSmsOztek(msgLines.join('\n'));
        await updateContactNotify(id, 'sent', null);
      } catch (err) {
        const errMsg = truncate(getErrorMessage(err), 1000);
        try {
          await updateContactNotify(id, 'failed', errMsg);
        } catch (updateErr) {
          console.error('Failed to update contact notify status:', updateErr);
        }
      }
    })();
  } catch (err) {
    next(err);
  }
});

export default router;
