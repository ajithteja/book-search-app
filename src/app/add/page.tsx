import BookForm from '@/components/BookForm';

export default function AddBookPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Book</h1>
      <BookForm />
    </div>
  );
}
