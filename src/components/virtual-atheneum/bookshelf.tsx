import type { Book } from '@/lib/types';
import { BookCover } from './book-cover';

interface BookshelfProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

export function Bookshelf({ books, onBookSelect }: BookshelfProps) {
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg bg-background/20">
        <p className="text-muted-foreground">This bookshelf is empty.</p>
      </div>
    );
  }

  return (
    <div
      className="bg-black/10 p-8 rounded-lg"
      style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.4)' }}
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
        {books.map((book) => (
          <BookCover key={book.id} book={book} onSelect={onBookSelect} />
        ))}
      </div>
    </div>
  );
}
