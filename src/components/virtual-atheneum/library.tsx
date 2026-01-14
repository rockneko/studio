'use client';

import { useState } from 'react';
import type { Book, Category } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <Tabs defaultValue={categories[0]?.id || 'all'} className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-none">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-8">
            <Bookshelf
              books={books.filter((book) => book.category === category.id)}
              onBookSelect={handleSelectBook}
            />
          </TabsContent>
        ))}
      </Tabs>
      <BookDetails
        book={selectedBook}
        open={!!selectedBook}
        onOpenChange={(isOpen) => !isOpen && handleCloseDetails()}
      />
    </>
  );
}
