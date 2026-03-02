-- Purified Services Portal (Scheduling v1)
-- Apply in Supabase SQL editor.

-- Properties / Sites
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null,
  name text not null,
  address1 text,
  city text,
  state text,
  postal_code text,
  type text not null default 'residential', -- residential | commercial
  created_at timestamptz not null default now()
);

alter table public.properties enable row level security;

create policy "properties: owner can read"
on public.properties for select
using (auth.uid() = owner_user_id);

create policy "properties: owner can insert"
on public.properties for insert
with check (auth.uid() = owner_user_id);

create policy "properties: owner can update"
on public.properties for update
using (auth.uid() = owner_user_id);

-- Scheduling requests (customer submits; admin approves/denies)
create table if not exists public.schedule_requests (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  requester_user_id uuid not null,
  preferred_day text not null, -- Mon, Tue, Wed, Thu, Fri, Sat
  notes text,
  status text not null default 'pending', -- pending | approved | denied
  assigned_day text,
  assigned_window text, -- e.g. "9am–12pm"
  admin_notes text,
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

alter table public.schedule_requests enable row level security;

create policy "schedule_requests: owner can read"
on public.schedule_requests for select
using (
  auth.uid() = requester_user_id
  or auth.uid() = (select owner_user_id from public.properties p where p.id = property_id)
);

create policy "schedule_requests: requester can insert"
on public.schedule_requests for insert
with check (auth.uid() = requester_user_id);

create policy "schedule_requests: requester can update notes when pending"
on public.schedule_requests for update
using (auth.uid() = requester_user_id and status = 'pending');

-- NOTE: Admin updates are performed via service role in backend later.
-- For v1 local demo we will keep admin approval UI without RLS writes.
