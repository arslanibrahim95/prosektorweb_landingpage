import https from 'https';
import http from 'http';
import crypto from 'crypto';

function parseEnvList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
}

function getEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

function truncate(s: string, max: number) {
  if (s.length <= max) return s;
  return `${s.slice(0, max)}...`;
}

function escapeXml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Oztek expects 10-digit Turkish GSM numbers without leading 0 or country code.
// Examples: 5551234567
function normalizeTrGsm(input: string): string | null {
  const digits = input.replace(/\D/g, '');

  let n = digits;
  if (n.startsWith('90') && n.length === 12) n = n.slice(2);
  if (n.startsWith('0') && n.length === 11) n = n.slice(1);

  if (n.length !== 10) return null;
  if (!n.startsWith('5')) return null;
  return n;
}

export async function notifyTeamSmsOztek(body: string): Promise<string> {
  const kno = getEnv('OZTEK_USER_ID');
  const kulad = getEnv('OZTEK_USERNAME');
  const sifre = getEnv('OZTEK_PASSWORD');
  const gonderen = getEnv('OZTEK_ORIGIN');
  const tur = (process.env.OZTEK_SMS_TYPE || 'Turkce').trim() || 'Turkce';
  // 🛡️ Sentinel: Enforce secure HTTPS connection to prevent plaintext credential transmission.
  // Legacy TLS compatibility is handled via secureOptions below.
  const endpoint = (process.env.OZTEK_API_URL || 'https://www.ozteksms.com/panel/smsgonder1Npost.php').trim();

  const toRaw = parseEnvList(process.env.OZTEK_NOTIFY_TO);
  if (toRaw.length === 0) throw new Error('Missing OZTEK_NOTIFY_TO');

  const normalized = toRaw
    .map(normalizeTrGsm)
    .filter((n): n is string => Boolean(n));

  if (normalized.length === 0) {
    throw new Error('OZTEK_NOTIFY_TO has no valid TR GSM numbers (expected 10 digits like 5551234567)');
  }

  const mesaj = truncate(body, 700);

  const xml =
    `<sms>` +
    `<kno>${escapeXml(kno)}</kno>` +
    `<kulad>${escapeXml(kulad)}</kulad>` +
    `<sifre>${escapeXml(sifre)}</sifre>` +
    `<tur>${escapeXml(tur)}</tur>` +
    `<gonderen>${escapeXml(gonderen)}</gonderen>` +
    `<mesaj>${escapeXml(mesaj)}</mesaj>` +
    `<numaralar>${escapeXml(normalized.join(','))}</numaralar>` +
    `</sms>`;

  const params = new URLSearchParams();
  params.set('data', xml);

  const bodyData = params.toString();
  const url = new URL(endpoint);

  const text = await new Promise<string>((resolve, reject) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(bodyData),
      },
      ...(url.protocol === 'https:' ? { secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT } : {})
    };

    const requestLib = url.protocol === 'https:' ? https : http;

    const req = requestLib.request(url, requestOptions, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        data = data.trim();
        if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
          reject(new Error(`Oztek HTTP ${res.statusCode}: ${truncate(data, 200)}`));
        } else {
          resolve(data);
        }
      });
    });

    req.on('error', reject);
    req.write(bodyData);
    req.end();
  });

  // Success responses start with "1:"
  if (!text.startsWith('1:')) {
    throw new Error(`Oztek error: ${truncate(text, 500)}`);
  }

  return text;
}
