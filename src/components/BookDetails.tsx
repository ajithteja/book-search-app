// 'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Book } from '@/types/book';

interface BookDetailsProps {
  book: Book;
}

export default function BookDetails({ book }: BookDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/4]">
                <div className="absolute inset-3">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain"
                    priority
                    quality={100}
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col h-full">
              <div className="flex-none">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">by {book.author}</p>
              </div>

              <div className="flex-1 overflow-y-auto min-h-0 max-h-[calc(100vh-24rem)]">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </div>

              <div className="flex-none pt-6 mt-6 border-t border-gray-200">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  Back to Search
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
