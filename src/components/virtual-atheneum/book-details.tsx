import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import type { Book } from '@/lib/types';
import { Separator } from '../ui/separator';

interface BookDetailsProps {
  book: Book | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BookDetails({ book, open, onOpenChange }: BookDetailsProps) {
  if (!book) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full md:max-w-md p-0" side="right">
        <div className="flex flex-col h-full">
          <div className="relative h-64 w-full">
            <Image
              src={book.coverUrl}
              alt={`Cover of ${book.title}`}
              fill
              className="object-cover"
              data-ai-hint="book cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="p-6 flex-1 overflow-y-auto">
            <SheetHeader className="text-left mb-4">
              <SheetTitle className="font-headline text-3xl text-primary">
                {book.title}
              </SheetTitle>
              <SheetDescription className="text-lg text-muted-foreground">
                by {book.author}
              </SheetDescription>
            </SheetHeader>

            <p className="text-foreground/80 leading-relaxed">{book.description}</p>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Read On</h4>
              <div className="flex gap-4">
                {book.readingPlatformLinks?.kobo && (
                  <Button asChild variant="outline">
                    <a href={book.readingPlatformLinks.kobo} target="_blank" rel="noopener noreferrer">
                      KOBO
                    </a>
                  </Button>
                )}
                {book.readingPlatformLinks?.readmoo && (
                  <Button asChild variant="outline">
                    <a href={book.readingPlatformLinks.readmoo} target="_blank" rel="noopener noreferrer">
                      Readmoo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
