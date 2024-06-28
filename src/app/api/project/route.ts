import db from '@/db/db';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';
import { deleteImageFromUrl } from '../utils/cloudinary.utils';

// /api/project

export async function GET(req: Request) {
  try {
    const projects = await db.project.findMany();
    return NextResponse.json({ data: projects }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, githubURL, websiteURL, stack, imageURL } =
      await req.json();

    await db.project.create({
      data: {
        title,
        description,
        githubURL,
        websiteURL,
        stack,
        imageURL,
      },
    });

    return NextResponse.json(
      { success: 'Project created successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const {
      title,
      description,
      githubURL,
      websiteURL,
      stack,
      imageURL,
      oldImageURL,
    } = await req.json();
    if (oldImageURL) {
      await deleteImageFromUrl(oldImageURL!);
    }
    await db.project.update({
      where: { id: id! },
      data: {
        title,
        description,
        githubURL,
        websiteURL,
        stack,
        imageURL,
      },
    });
    return NextResponse.json(
      { success: 'Successfully deleted project' },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    const foundProject = await db.project.findUnique({
      where: { id: id! },
    });

    await db.project.delete({ where: { id: id! } });
    if (foundProject?.imageURL) {
      await deleteImageFromUrl(foundProject?.imageURL!);
    }

    return NextResponse.json(
      { success: 'Successfully deleted project' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
