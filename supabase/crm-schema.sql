-- Fresno Pool Care CRM Schema
-- Modeled after Blue Label Wholesale (minus products/orders/accounting)
-- Apply in Supabase SQL editor for project tfqxrvsglvcgcrhhukmx

-- Companies (pool service prospects, property management firms, etc.)
create table if not exists public.companies (
  id bigint generated always as identity primary key,
  name text not null,
  domain text,
  phone text,
  city text,
  state text,
  address text,
  source text,
  google_place_id text,
  rating numeric(2,1),
  review_count integer default 0,
  created_at timestamptz not null default now()
);

alter table public.companies enable row level security;

-- Contacts (leads, customers, property managers)
create table if not exists public.contacts (
  id bigint generated always as identity primary key,
  company_id bigint references public.companies(id) on delete set null,
  firstname text,
  lastname text,
  email text,
  phone text,
  city text,
  state text,
  role text,
  source text,
  lead_status text not null default 'NEW',
  lifecycle_stage text not null default 'lead',
  review_text text,
  review_rating numeric(2,1),
  review_keywords text[],
  created_at timestamptz not null default now()
);

alter table public.contacts enable row level security;

create index if not exists idx_contacts_email on public.contacts(email);
create index if not exists idx_contacts_company on public.contacts(company_id);

-- Deals (service contracts, recurring agreements)
create table if not exists public.deals (
  id bigint generated always as identity primary key,
  company_id bigint references public.companies(id) on delete set null,
  contact_id bigint references public.contacts(id) on delete set null,
  name text not null,
  stage text not null default 'qualification',
  amount numeric(12,2) default 0,
  owner text,
  created_at timestamptz not null default now()
);

alter table public.deals enable row level security;

-- Lists (static contact lists for segmentation/campaigns)
create table if not exists public.lists (
  id bigint generated always as identity primary key,
  name text not null unique,
  description text,
  created_at timestamptz not null default now()
);

alter table public.lists enable row level security;

-- List members (many-to-many)
create table if not exists public.list_members (
  list_id bigint not null references public.lists(id) on delete cascade,
  contact_id bigint not null references public.contacts(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (list_id, contact_id)
);

alter table public.list_members enable row level security;

-- Activities (calls, emails, meetings, site visits)
create table if not exists public.activities (
  id bigint generated always as identity primary key,
  contact_id bigint references public.contacts(id) on delete set null,
  company_id bigint references public.companies(id) on delete set null,
  deal_id bigint references public.deals(id) on delete set null,
  type text not null,
  notes text,
  created_at timestamptz not null default now()
);

alter table public.activities enable row level security;

create index if not exists idx_activities_contact on public.activities(contact_id);
create index if not exists idx_activities_company on public.activities(company_id);

-- Communications (email, SMS, call tracking)
create table if not exists public.communications (
  id bigint generated always as identity primary key,
  contact_id bigint references public.contacts(id) on delete set null,
  company_id bigint references public.companies(id) on delete set null,
  channel text not null,
  direction text not null,
  subject text,
  body text,
  status text not null default 'completed',
  scheduled_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.communications enable row level security;

-- Events (analytics: page views, form submissions, clicks)
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  event_type text not null,
  path text,
  referrer text,
  user_agent text,
  user_email text,
  visitor_id uuid,
  session_id uuid,
  utm jsonb default '{}',
  meta jsonb default '{}'
);

alter table public.events enable row level security;

create index if not exists idx_events_created on public.events(created_at);
create index if not exists idx_events_type on public.events(event_type);
create index if not exists idx_events_visitor on public.events(visitor_id);

-- Marketing content queue
create table if not exists public.marketing_content_queue (
  id bigint generated always as identity primary key,
  status text not null default 'draft',
  media_urls text[],
  caption text,
  platform text,
  posted_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.marketing_content_queue enable row level security;
