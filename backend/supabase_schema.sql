-- Supabase SQL (Landing)
-- Run in Supabase SQL editor.

create extension if not exists "pgcrypto";

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company text not null,
  name text not null,
  email text not null,
  phone text not null,
  consent boolean not null,
  page_url text,
  ip text,
  user_agent text,
  notify_status text not null default 'pending',
  notify_error text
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  message text not null,
  kvkk boolean not null,
  page_url text,
  ip text,
  user_agent text,
  notify_status text not null default 'pending',
  notify_error text
);

-- Optional: basic indexes for filtering/sorting
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists contact_messages_created_at_idx on public.contact_messages (created_at desc);

-- Security: landing verisi PII icerir. Frontend'in dogrudan okumasi/yazmasi engellenmeli.
-- Backend, Supabase service role key ile calistigi icin RLS bypass eder.
alter table public.leads enable row level security;
alter table public.contact_messages enable row level security;

revoke all on table public.leads from anon, authenticated;
revoke all on table public.contact_messages from anon, authenticated;

grant all on table public.leads to service_role;
grant all on table public.contact_messages to service_role;
