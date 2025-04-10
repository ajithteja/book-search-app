import SearchBar from '@/components/SearchBar';
import BookCard from '@/components/BookCard';
import Pagination from '@/components/Pagination';
import Link from 'next/link';
import { getBooks } from '@/lib/books';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;

  const query = resolvedSearchParams.query || '';
  const page = parseInt(resolvedSearchParams.page || '1');
  const { books, pagination } = await getBooks(query, page);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Book Search App
        </h1>
        <Link
          href="/add"
          className="inline-block px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
          Add New Book
        </Link>
      </div>

      <SearchBar initialQuery={query} />

      {books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2 mt-8">
          <p className="text-2xl font-medium text-gray-700 bg-white ">
            No Books Found
          </p>
        </div>
      )}
      {books.length > 0 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </main>
  );
}
