'use client';

import { useState } from 'react';
import type { Book, Category } from '@/lib/types';
import { Bookshelf } from './bookshelf';
import { BookDetails } from './book-details';

interface LibraryProps {
  initialBooks: Book[];
  categories: Category[];
}

export function Library({ initialBooks, categories }: LibraryProps) {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <div className="w-full space-y-8">
        {categories.map((category) => (
          <Bookshelf
            key={category.id}
            category={category}
            books={books.filter((book) => book.category === category.id)}
            onBookSelect={handleSelectBook}
          />
        ))}
      </div>
      <BookDetails
        book={selectedBook}
        open={!!selectedBook}
        onOpenChange={(isOpen) => !isOpen && handleCloseDetails()}
      />
    </>
  );
}
