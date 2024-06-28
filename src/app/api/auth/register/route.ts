import { NextResponse } from 'next/server';
import db from '@/db/db';
import { hash } from 'bcryptjs';

export async function POST(req: Request) {
  try {
    const values = await req.json();
    const { name, email, password } = values;
    const hashedPassword = await hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { success: 'Successfully created user!' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
