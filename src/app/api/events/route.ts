import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { ok: false, error: 'Database not configured' },
      { status: 503 },
    );
  }

  const body = await req.json();

  const row = {
    event_type: body.event_type || 'page_view',
    path: body.path || null,
    referrer: body.referrer || null,
    user_agent: req.headers.get('user-agent') || null,
    user_email: body.user_email || null,
    visitor_id: body.visitor_id || null,
    session_id: body.session_id || null,
    utm: body.utm || {},
    meta: body.meta || {},
  };

  const res = await fetch(`${url}/rest/v1/events`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(row),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { ok: false, error: text },
      { status: res.status },
    );
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
