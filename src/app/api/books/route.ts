import { NextRequest, NextResponse } from 'next/server';
import { getBooks, createBook } from '@/lib/books';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query')?.toLowerCase() || '';
  const page = parseInt(searchParams.get('page') || '1');

  const result = await getBooks(query, page);
  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const title = formData.get('title') as string;
  const author = formData.get('author') as string;
  const description = formData.get('description') as string;
  const file = formData.get('file') as File;

  if (!title || !author || !description || !file) {
    return NextResponse.json(
      { message: 'Missing required fields' },
      { status: 400 }
    );
  }

  const newBook = await createBook(title, author, description, file);
  return NextResponse.json({ book: newBook }, { status: 201 });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
