import fs from 'fs/promises';
import path from 'path';
import { Book } from '@/types/book';
import books from '@/data/books.json';

const booksPath = path.join(process.cwd(), 'src/data/books.json');

const booksCache: { [key: string]: { data: Book | null; timestamp: number } } =
  {};
const booksListCache: {
  [key: string]: {
    data: { books: Book[]; pagination: PaginationData };
    timestamp: number;
  };
} = {};
const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

interface PaginationData {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export async function getBooks(
  query: string = '',
  page: number = 1
): Promise<{ books: Book[]; pagination: PaginationData }> {
  const cacheKey = `${query}-${page}`;

  const cachedResult = booksListCache[cacheKey];
  const now = Date.now();

  if (cachedResult && now - cachedResult.timestamp < CACHE_TTL) {
    console.log(`Cache hit for books list: ${cacheKey}`);
    return cachedResult.data;
  }

  console.log(`Cache miss for books list: ${cacheKey}`);

  try {
    const filteredBooks = query
      ? books.filter(
          (book: Book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
        )
      : books;

    const itemsPerPage = 12;
    const start = (page - 1) * itemsPerPage;
    const paginatedBooks = filteredBooks.slice(start, start + itemsPerPage);
    const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);

    const result = {
      books: paginatedBooks,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems: filteredBooks.length,
        itemsPerPage,
      },
    };

    booksListCache[cacheKey] = {
      data: result,
      timestamp: now,
    };

    return result;
  } catch (error) {
    console.error('Error reading books:', error);
    return {
      books: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalItems: 0,
        itemsPerPage: 12,
      },
    };
  }
}

export async function getBookById(id: string): Promise<Book | null> {
  const cachedBook = booksCache[id];
  const now = Date.now();

  if (cachedBook && now - cachedBook.timestamp < CACHE_TTL) {
    console.log(`Cache hit for book ${id}`);
    return cachedBook.data;
  }

  console.log(`Cache miss for book ${id}`);

  try {
    const book = books.find((book: Book) => book.id === id) || null;
    booksCache[id] = {
      data: book,
      timestamp: now,
    };

    return book;
  } catch (error) {
    console.error('Error reading book:', error);
    return null;
  }
}

export async function createBook(
  title: string,
  author: string,
  description: string,
  file: File
): Promise<Book> {
  try {
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await fs.mkdir(uploadsDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = `${Date.now()}-${file.name}`;
    const filepath = path.join(uploadsDir, filename);

    await fs.writeFile(filepath, buffer);

    const newBook: Book = {
      id: String(books.length + 1),
      title,
      author,
      description,
      imageUrl: `/uploads/${filename}`,
    };

    books.push(newBook);

    await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

    return newBook;
  } catch (error) {
    console.error('Error creating book:', error);
    throw error;
  }
}
