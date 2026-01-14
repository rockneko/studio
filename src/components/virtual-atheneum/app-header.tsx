'use client';

import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImportDialog } from './import-dialog';

export function AppHeader() {
  const [isImportOpen, setImportOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-headline font-bold text-foreground">
              Virtual Atheneum
            </h1>
          </div>
          <Button onClick={() => setImportOpen(true)}>Import Books</Button>
        </div>
      </header>
      <ImportDialog open={isImportOpen} onOpenChange={setImportOpen} />
    </>
  );
}
