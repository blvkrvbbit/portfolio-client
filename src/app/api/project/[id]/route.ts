import db from '@/db/db';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    console.log(params.id);
    const project = await db.project.findUnique({
      where: {
        id: params.id,
      },
    });
    console.log(project);
    // const projects = await db.project.findMany();
    return NextResponse.json({ data: project }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
