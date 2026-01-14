export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  coverImageId: string;
  description: string;
  category: string;
  readingPlatformLinks?: {
    kobo?: string;
    readmoo?: string;
  };
}

export interface Category {
  id: string;
  name: string;
}
