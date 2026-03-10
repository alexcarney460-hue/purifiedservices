import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase-server';
import { requireAdmin } from '@/lib/admin/requireAdmin';

export async function GET(req: Request) {
  const authErr = requireAdmin(req);
  if (authErr) return authErr;

  const supabase = getSupabaseServer();
  if (!supabase)
    return NextResponse.json(
      { ok: false, error: 'Database unavailable' },
      { status: 503 },
    );

  const { searchParams } = new URL(req.url);
  const status = searchParams.get('status') || '';

  let query = supabase
    .from('marketing_content_queue')
    .select('*')
    .order('created_at', { ascending: false });

  if (status) query = query.eq('status', status);

  const { data, error } = await query;

  if (error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, data });
}

export async function PATCH(req: Request) {
  const authErr = requireAdmin(req);
  if (authErr) return authErr;

  const supabase = getSupabaseServer();
  if (!supabase)
    return NextResponse.json(
      { ok: false, error: 'Database unavailable' },
      { status: 503 },
    );

  const body = await req.json();
  const { id, status, media_urls } = body;

  if (!id)
    return NextResponse.json(
      { ok: false, error: 'id is required' },
      { status: 400 },
    );

  const update: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (status) update.status = status;
  if (media_urls) update.media_urls = media_urls;

  const { data, error } = await supabase
    .from('marketing_content_queue')
    .update(update)
    .eq('id', id)
    .select()
    .single();

  if (error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 400 });

  return NextResponse.json({ ok: true, data });
}
