import BookDetailsSkeleton from '@/components/BookDetailsSkeleton';
import BookSkeleton from '@/components/BookSkeleton';
import React from 'react';

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <BookSkeleton key={i} />
          //   <div
          //     key={i}
          //     className="animate-pulse bg-gray-200 h-48 rounded-lg"
          //   />
        ))}
      </div>
    </div>
  );
}
