import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function POST(req: NextRequest) {
  try {
    const { thread_id, anon_id, body, reply_to_post_id } = await req.json();

    if (!thread_id || !anon_id || !body) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    if (body.length > 500 || body.length < 1) {
      return NextResponse.json({ error: 'Body must be 1-500 chars' }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('posts')
      .insert({
        thread_id,
        anon_id: anon_id.slice(0, 8),
        body: body.trim(),
        reply_to_post_id: reply_to_post_id || null,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
