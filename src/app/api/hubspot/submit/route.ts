import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase-server';

/**
 * HubSpot form submit endpoint — rewired to local Supabase CRM.
 * Accepts form data and upserts into the contacts table.
 */
export async function POST(req: Request) {
  const supabase = getSupabaseServer();
  if (!supabase)
    return NextResponse.json(
      { ok: false, error: 'Database unavailable' },
      { status: 503 },
    );

  const body = await req.json();

  const email = (body.email || '').trim().toLowerCase();
  if (!email) {
    return NextResponse.json(
      { ok: false, error: 'email is required' },
      { status: 400 },
    );
  }

  const name = (body.name || '').trim();
  const [firstname, ...rest] = name.split(' ');
  const lastname = rest.join(' ');

  const contact = {
    email,
    firstname: body.firstname || firstname || null,
    lastname: body.lastname || lastname || null,
    phone: body.phone || null,
    city: body.city || null,
    state: body.state || null,
    source: body.source || 'website_form',
    lead_status: 'NEW',
    lifecycle_stage: 'lead',
  };

  // Upsert: if email exists, update; otherwise insert
  const { data: existing } = await supabase
    .from('contacts')
    .select('id')
    .eq('email', email)
    .maybeSingle();

  if (existing) {
    const { data, error } = await supabase
      .from('contacts')
      .update({
        firstname: contact.firstname,
        lastname: contact.lastname,
        phone: contact.phone || undefined,
        city: contact.city || undefined,
        state: contact.state || undefined,
      })
      .eq('id', existing.id)
      .select()
      .single();

    if (error)
      return NextResponse.json({ ok: false, error: error.message }, { status: 400 });

    return NextResponse.json({ ok: true, data, action: 'updated' });
  }

  const { data, error } = await supabase
    .from('contacts')
    .insert(contact)
    .select()
    .single();

  if (error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });

  return NextResponse.json({ ok: true, data, action: 'created' }, { status: 201 });
}
