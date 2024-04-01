import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = 'google';
  } else if (buttonId === 2) {
    path = 'youtube';
  } else {
    path = '';
  }
  const headers = new Headers();
  headers.set('Location', `https://farcaster-frames-demo-mian-zaid.vercel.app/`);
  const response = NextResponse.redirect(`https://farcaster-frames-demo-mian-zaid.vercel.app/${path}`, {
    headers: headers,
    status: 302,
  });
  return response;
}

export const dynamic = 'force-dynamic';