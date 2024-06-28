import { NextResponse } from 'next/server';
import db from '@/app/db/db';
export async function GET(req: Request) {
  try {
    const messages = await db.message.findMany();
    return NextResponse.json({ messages: messages }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    // const { name, email, content } = await req.json();
    // const message = await db.message.create({
    //   data: { name, email, content },
    // });

    return NextResponse.json({ success: 'Message Sent!' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
