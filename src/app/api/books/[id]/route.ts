import { NextRequest, NextResponse } from 'next/server';
import { getBookById } from '@/lib/books';

type Props = {
  params: {
    id: string;
  };
};

export async function GET(
  _request: NextRequest,
  { params }: Props
) {
  try {
    const book = await getBookById(params.id);

    if (!book) {
      return NextResponse.json({ message: 'Book not found' }, { status: 404 });
    }
    return NextResponse.json({ book });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Error fetching book' },
      { status: 500 }
    );
  }
}
