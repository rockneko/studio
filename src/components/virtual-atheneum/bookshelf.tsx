import type { Book } from '@/lib/types';
import { BookCover } from './book-cover';

interface BookshelfProps {
  books: Book[];
  onBookSelect: (book: Book) => void;
}

const SHELF_BOOK_CAPACITY = 6; // xl-cols-6

function chunkBooks(books: Book[]): Book[][] {
  const chunks: Book[][] = [];
  for (let i = 0; i < books.length; i += SHELF_BOOK_CAPACITY) {
    chunks.push(books.slice(i, i + SHELF_BOOK_CAPACITY));
  }
  return chunks;
}

export function Bookshelf({ books, onBookSelect }: BookshelfProps) {
  if (books.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 border-2 border-dashed border-border rounded-lg bg-background/20">
        <p className="text-muted-foreground">This bookshelf is empty.</p>
      </div>
    );
  }

  const bookRows = chunkBooks(books);

  return (
    <div className="space-y-4">
      {bookRows.map((row, rowIndex) => (
        <div key={rowIndex} className="relative pt-10">
          {/* Shelf */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#6f4e37] rounded-sm shadow-[0_5px_5px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-repeat-x opacity-20" style={{backgroundImage: 'url(/wood-grain.png)'}}></div>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 px-4"
          >
            {row.map((book) => (
              <div key={book.id} className="self-end pb-4">
                 <BookCover book={book} onSelect={onBookSelect} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
