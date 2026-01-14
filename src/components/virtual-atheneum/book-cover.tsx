import Image from 'next/image';
import type { Book } from '@/lib/types';

interface BookCoverProps {
  book: Book;
  onSelect: (book: Book) => void;
}

export function BookCover({ book, onSelect }: BookCoverProps) {
  return (
    <div
      className="relative group cursor-pointer transition-transform hover:-translate-y-2"
      onClick={() => onSelect(book)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(book)}
      aria-label={`View details for ${book.title}`}
    >
      <div className="w-24 h-36 bg-gray-200 shadow-[5px_5px_15px_rgba(0,0,0,0.4)] rounded-r-sm overflow-hidden border-l-4 border-black/20 relative">
        <Image
          src={book.coverUrl}
          alt={`Cover of ${book.title}`}
          fill
          sizes="100px"
          className="object-cover"
          data-ai-hint="book cover"
        />
      </div>
      <div className="absolute bottom-full mb-2 w-max max-w-xs hidden group-hover:block bg-black/80 text-white text-[10px] p-1 rounded z-20">
        {book.title}
      </div>
    </div>
  );
}
