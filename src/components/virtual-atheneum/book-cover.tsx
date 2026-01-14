import Image from 'next/image';
import type { Book } from '@/lib/types';

interface BookCoverProps {
  book: Book;
  onSelect: (book: Book) => void;
}

export function BookCover({ book, onSelect }: BookCoverProps) {
  return (
    <div
      className="group relative cursor-pointer text-center transition-all duration-300 ease-in-out"
      onClick={() => onSelect(book)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(book)}
      aria-label={`View details for ${book.title}`}
    >
      <div className="transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md shadow-lg group-hover:shadow-primary/30">
          <Image
            src={book.coverUrl}
            alt={`Cover of ${book.title}`}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 15vw"
            className="object-cover"
            data-ai-hint="book cover"
          />
        </div>
      </div>
      <h3 className="mt-4 text-sm font-semibold text-foreground truncate">{book.title}</h3>
      <p className="text-xs text-muted-foreground truncate">{book.author}</p>
    </div>
  );
}
