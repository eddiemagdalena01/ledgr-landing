// This route works in dev only (static export). For production, replace with a Cloudflare Worker or a service like Formspree.

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email required' }, { status: 400 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
