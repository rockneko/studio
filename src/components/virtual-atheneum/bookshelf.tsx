import type { Book, Category } from '@/lib/types';
import { BookCover } from './book-cover';

interface BookshelfProps {
  books: Book[];
  category: Category;
  onBookSelect: (book: Book) => void;
}

export function Bookshelf({ books, category, onBookSelect }: BookshelfProps) {
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg bg-background/20">
        <p className="text-muted-foreground">This bookshelf is empty.</p>
      </div>
    );
  }

  return (
    <div className="mb-12">
      <h2 className="text-amber-100 font-serif text-xl mb-2 ml-4 italic border-l-4 border-amber-600 pl-2">
        {category.name}
      </h2>
      <div
        className="relative bg-[#3d2b1f] border-b-[12px] border-[#2a1d15] shadow-2xl p-4 flex gap-6 items-end min-h-[220px] rounded-sm overflow-x-auto"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="flex flex-row gap-6 items-end">
          {books.map((book) => (
            <BookCover key={book.id} book={book} onSelect={onBookSelect} />
          ))}
        </div>
      </div>
    </div>
  );
}
