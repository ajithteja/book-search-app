import Link from 'next/link';

interface Book {
  id: string;
  title: string;
  author: string;
  // imageUrl: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer">
        <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
      </div>
    </Link>
  );
}
