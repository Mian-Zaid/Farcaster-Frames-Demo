import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1

  if(idAsNumber === 2){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame 3</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://placehold.co/400/blue/white?text=GreatApe+Frames+Blue" />
    <meta property="fc:frame:button:1" content="Visit Google" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Visit Youtube" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:post_url" content="https://farcaster-frames-demo-mian-zaid.vercel.app/api/end" />
  </head></html>`);
  } else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://placehold.co/400/red/white?text=GreatApe+Frames+Red" />
    <meta property="fc:frame:button:1" content="Goto Blue Background" />
    <meta property="fc:frame:post_url" content="https://farcaster-frames-demo-mian-zaid.vercel.app/api/frame?id=${nextId}" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';