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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Wood texture effect */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath opacity=\'.5\' d=\'M96 95h4v1h-4v-1ZM4 95h4v1H4v-1ZM96 5h4v1h-4V5ZM4 5h4v1H4V5Z\'/%3E%3Cpath d=\'M96 99v-4h1v4h-1ZM96 1v-4h1v4h-1ZM4 99v-4h1v4H4ZM4 1v-4h1v4H4ZM1 96h-4v1h4v-1ZM1 4h-4v1h4v-1ZM99 96h-4v1h4v-1ZM99 4h-4v1h4v-1Z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-transparent via-black/20 to-background" />

      <AppHeader />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 z-10">
        <Library initialBooks={booksWithCovers} categories={categories} />
      </main>
    </div>
  );
}
