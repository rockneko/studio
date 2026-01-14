import type { Book, Category } from './types';

export const categories: Category[] = [
  { id: 'fiction', name: 'Fiction' },
  { id: 'non-fiction', name: 'Non-Fiction' },
  { id: 'fantasy', name: 'Fantasy' },
];

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImageId: 'book-cover-1',
    coverUrl: '', // This will be populated from placeholder images
    description: 'A novel about the American dream, set in the Roaring Twenties. It explores themes of wealth, class, and love.',
    category: 'fiction',
    readingPlatformLinks: {
      kobo: '#',
      readmoo: '#',
    },
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImageId: 'book-cover-2',
    coverUrl: '',
    description: 'A landmark science fiction novel set in the distant future amidst a feudal interstellar society.',
    category: 'fiction',
    readingPlatformLinks: {
      kobo: '#',
    },
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    coverImageId: 'book-cover-3',
    coverUrl: '',
    description: 'A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.',
    category: 'fiction',
    readingPlatformLinks: {
      readmoo: '#',
    },
  },
  {
    id: '4',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    coverImageId: 'book-cover-4',
    coverUrl: '',
    description: 'A book that surveys the history of humankind from the Stone Age to the twenty-first century.',
    category: 'non-fiction',
    readingPlatformLinks: {
      kobo: '#',
      readmoo: '#',
    },
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImageId: 'book-cover-5',
    coverUrl: '',
    description: "A children's fantasy novel that is a prelude to The Lord of the Rings. Follow Bilbo Baggins on an unexpected journey.",
    category: 'fantasy',
    readingPlatformLinks: {
      kobo: '#',
      readmoo: '#',
    },
  },
  {
    id: '6',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImageId: 'book-cover-6',
    coverUrl: '',
    description: 'An easy & proven way to build good habits & break bad ones.',
    category: 'non-fiction',
  },
];
