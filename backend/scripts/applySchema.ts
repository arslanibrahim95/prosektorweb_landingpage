import fs from 'node:fs';
import path from 'node:path';

import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Client } = pg;

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

async function main() {
  let databaseUrl = getEnv('DATABASE_URL').trim();
  // Users sometimes paste Supabase's placeholder format like:
  // postgresql://postgres:[YOUR-PASSWORD]@db.<ref>.supabase.co:5432/postgres
  // Strip brackets and trim the password segment if present.
  databaseUrl = databaseUrl.replace(/:\[(.*?)\]@/g, (_m, pw) => `:${encodeURIComponent(String(pw).trim())}@`);
  const sqlPath = path.resolve(process.cwd(), 'supabase_schema.sql');
  const sql = fs.readFileSync(sqlPath, 'utf8');

  const client = new Client({
    connectionString: databaseUrl,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  try {
    await client.query('begin');
    await client.query(sql);
    await client.query('commit');
  } catch (err) {
    try {
      await client.query('rollback');
    } catch {
      // ignore rollback errors
    }
    throw err;
  } finally {
    await client.end();
  }

  console.log('Schema applied successfully:', sqlPath);
}

main().catch((err) => {
  const msg = err instanceof Error ? err.message : String(err);
  if (/ENOTFOUND db\./.test(msg) || /ENOTFOUND.*supabase\.co/.test(msg)) {
    console.error(
      [
        msg,
        '',
        'Hint: Your Supabase direct DB host (db.<ref>.supabase.co) may be IPv6-only.',
        'If your environment has no IPv6 route, use the Supabase "connection pooler" DATABASE_URL instead.',
      ].join('\n'),
    );
  } else {
    console.error(err);
  }
  process.exit(1);
});
