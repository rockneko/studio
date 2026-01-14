'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ImportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImportDialog({ open, onOpenChange }: ImportDialogProps) {
  const { toast } = useToast();

  const handleImport = () => {
    // In a real app, you would process the file or JSON here.
    // For now, we just show a success message.
    toast({
      title: 'Import Successful',
      description: 'Your books have been added to the library.',
    });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline">Import Books</DialogTitle>
          <DialogDescription>
            Import your book data from KOBO/Readmoo or a JSON file.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Import from JSON file</Label>
            <Input id="picture" type="file" accept=".json" />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Or paste JSON content</Label>
            <Textarea placeholder="Paste your JSON here..." id="message" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleImport}>
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
