import { notFound } from 'next/navigation';
import BookDetails from '@/components/BookDetails';
import { getBookById } from '@/lib/books';

export default async function BookPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const book = await getBookById(id);
  if (!book) notFound();

  return <BookDetails book={book} />;
}
