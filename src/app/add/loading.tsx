import BookFormSkeleton from '@/components/BookFormSkeleton';

export default function AddBookLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-10 bg-gray-200 rounded w-1/3 mx-auto mb-8 animate-pulse" />
      <BookFormSkeleton />
    </div>
  );
}
