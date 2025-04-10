'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchBar({
  initialQuery = '',
}: {
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  // const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();
  // const searchParams = useSearchParams();

  // Reset isSearching when query param changes (after search completes)
  // useEffect(() => {
  //   setIsSearching(false);
  // }, [searchParams.get('query')]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const encoded = encodeURIComponent(query.trim());

    // setIsSearching(true);
    router.push(`?query=${encoded}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Search
        </button>
      </div>
    </form>
  );
}
