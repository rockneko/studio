import { AppHeader } from '@/components/virtual-atheneum/app-header';
import { Library } from '@/components/virtual-atheneum/library';
import { books, categories } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Book } from '@/lib/types';

export default function Home() {
  const imageMap = new Map(PlaceHolderImages.map((img) => [img.id, img.imageUrl]));

  const booksWithCovers: Book[] = books.map((book) => ({
    ...book,
    coverUrl: imageMap.get(book.coverImageId) || 'https://picsum.photos/seed/default/300/450',
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        <Library initialBooks={booksWithCovers} categories={categories} />
      </main>
    </div>
  );
}
