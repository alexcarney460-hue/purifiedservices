import { NextResponse } from 'next/server';
import { getSupabaseServer } from '@/lib/supabase-server';
import { requireAdmin } from '@/lib/admin/requireAdmin';

type Ctx = { params: Promise<{ id: string }> };

export async function POST(req: Request, ctx: Ctx) {
  const authErr = requireAdmin(req);
  if (authErr) return authErr;

  const supabase = getSupabaseServer();
  if (!supabase)
    return NextResponse.json(
      { ok: false, error: 'Database unavailable' },
      { status: 503 },
    );

  const { id } = await ctx.params;

  const { data: item, error: fetchError } = await supabase
    .from('marketing_content_queue')
    .select('*')
    .eq('id', id)
    .single();

  if (fetchError || !item)
    return NextResponse.json(
      { ok: false, error: 'Content item not found' },
      { status: 404 },
    );

  if (item.status !== 'approved')
    return NextResponse.json(
      { ok: false, error: `Cannot publish item with status "${item.status}"` },
      { status: 400 },
    );

  const { data, error } = await supabase
    .from('marketing_content_queue')
    .update({
      status: 'posted',
      posted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error)
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true, data });
}
