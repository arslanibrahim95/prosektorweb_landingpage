import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import pg from 'pg';

type StoreMode = 'supabase' | 'postgres';

function tryGetJwtRole(jwt: string): string | null {
  const parts = jwt.split('.');
  if (parts.length !== 3) return null;
  try {
    const json = Buffer.from(parts[1]!, 'base64url').toString('utf8');
    const payload = JSON.parse(json) as { role?: unknown };
    return typeof payload.role === 'string' ? payload.role : null;
  } catch {
    return null;
  }
}

function looksLikeSupabaseServiceKey(value: string): boolean {
  const k = value.trim();

  // Legacy "anon" / "service_role" keys are JWTs.
  if (k.startsWith('eyJ') && k.split('.').length === 3 && k.length > 100) {
    // Only accept service_role here; anon keys should never be used server-side.
    return tryGetJwtRole(k) === 'service_role';
  }

  // New key format (2025+): sb_publishable_* / sb_secret_*
  if (k.startsWith('sb_secret_') && k.length > 40) return true;

  return false;
}

let _mode: StoreMode | null = null;
let _supabase: SupabaseClient | null = null;
let _pool: pg.Pool | null = null;

function getMode(): StoreMode {
  if (_mode) return _mode;

  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (supabaseUrl && supabaseKey && looksLikeSupabaseServiceKey(supabaseKey)) {
    _mode = 'supabase';
    return _mode;
  }

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (databaseUrl) {
    _mode = 'postgres';
    return _mode;
  }

  throw new Error(
    'Missing data store config. Provide SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY, or DATABASE_URL for direct Postgres access.',
  );
}

function getSupabase(): SupabaseClient {
  if (_supabase) return _supabase;

  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  if (!url || !serviceRoleKey) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  _supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  return _supabase;
}

function getPool(): pg.Pool {
  if (_pool) return _pool;

  const databaseUrl = process.env.DATABASE_URL?.trim();
  if (!databaseUrl) throw new Error('Missing DATABASE_URL');

  _pool = new pg.Pool({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
    max: 5,
  });

  return _pool;
}

export type NotifyStatus = 'pending' | 'sent' | 'failed';

export async function insertLead(row: {
  company: string;
  name: string;
  email: string;
  phone: string;
  consent: boolean;
  page_url?: string;
  ip?: string;
  user_agent?: string;
  notify_status: NotifyStatus;
}): Promise<{ id: string; createdAt: string }> {
  if (getMode() === 'supabase') {
    const { data, error } = await getSupabase()
      .from('leads')
      .insert(row)
      .select('id, created_at')
      .single();

    if (error || !data) {
      throw new Error(`Supabase insert lead failed: ${error?.message ?? 'unknown error'}`);
    }

    return { id: data.id as string, createdAt: data.created_at as string };
  }

  const res = await getPool().query(
    `insert into public.leads
      (company, name, email, phone, consent, page_url, ip, user_agent, notify_status)
     values
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     returning id, created_at`,
    [
      row.company,
      row.name,
      row.email,
      row.phone,
      row.consent,
      row.page_url ?? null,
      row.ip ?? null,
      row.user_agent ?? null,
      row.notify_status,
    ],
  );

  const r = res.rows[0] as { id: string; created_at: string | Date } | undefined;
  if (!r) throw new Error('Postgres insert lead failed: no row returned');

  const createdAt = typeof r.created_at === 'string' ? r.created_at : r.created_at.toISOString();
  return { id: r.id, createdAt };
}

export async function updateLeadNotify(id: string, status: Exclude<NotifyStatus, 'pending'>, notifyError: string | null) {
  if (getMode() === 'supabase') {
    const { error } = await getSupabase()
      .from('leads')
      .update({ notify_status: status, notify_error: notifyError })
      .eq('id', id);

    if (error) {
      throw new Error(`Supabase update lead notify failed: ${error.message}`);
    }
    return;
  }

  await getPool().query(`update public.leads set notify_status=$2, notify_error=$3 where id=$1`, [
    id,
    status,
    notifyError,
  ]);
}

export async function insertContactMessage(row: {
  name: string;
  phone: string;
  email: string;
  message: string;
  kvkk: boolean;
  page_url?: string;
  ip?: string;
  user_agent?: string;
  notify_status: NotifyStatus;
}): Promise<{ id: string; createdAt: string }> {
  if (getMode() === 'supabase') {
    const { data, error } = await getSupabase()
      .from('contact_messages')
      .insert(row)
      .select('id, created_at')
      .single();

    if (error || !data) {
      throw new Error(`Supabase insert contact message failed: ${error?.message ?? 'unknown error'}`);
    }

    return { id: data.id as string, createdAt: data.created_at as string };
  }

  const res = await getPool().query(
    `insert into public.contact_messages
      (name, phone, email, message, kvkk, page_url, ip, user_agent, notify_status)
     values
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     returning id, created_at`,
    [
      row.name,
      row.phone,
      row.email,
      row.message,
      row.kvkk,
      row.page_url ?? null,
      row.ip ?? null,
      row.user_agent ?? null,
      row.notify_status,
    ],
  );

  const r = res.rows[0] as { id: string; created_at: string | Date } | undefined;
  if (!r) throw new Error('Postgres insert contact message failed: no row returned');

  const createdAt = typeof r.created_at === 'string' ? r.created_at : r.created_at.toISOString();
  return { id: r.id, createdAt };
}

export async function updateContactNotify(id: string, status: Exclude<NotifyStatus, 'pending'>, notifyError: string | null) {
  if (getMode() === 'supabase') {
    const { error } = await getSupabase()
      .from('contact_messages')
      .update({ notify_status: status, notify_error: notifyError })
      .eq('id', id);

    if (error) {
      throw new Error(`Supabase update contact notify failed: ${error.message}`);
    }
    return;
  }

  await getPool().query(`update public.contact_messages set notify_status=$2, notify_error=$3 where id=$1`, [
    id,
    status,
    notifyError,
  ]);
}
