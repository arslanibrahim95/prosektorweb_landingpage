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
      company: input.company,
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
        input.company ? `Firma: ${input.company}` : null,
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

// 🛡️ Sentinel: Secure backend proxy for Gemini API to avoid exposing GEMINI_API_KEY to the frontend.
router.post('/ai/generate', async (req, res, next) => {
  try {
    const { prompt } = req.body;
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'invalid_prompt' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'ai_service_unavailable' });
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
    const aiRes = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });

    if (!aiRes.ok) {
      const errorText = await aiRes.text();
      console.error('Gemini API Error:', errorText);
      return res.status(aiRes.status).json({ error: 'ai_generation_failed' });
    }

    const data = await aiRes.json();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
