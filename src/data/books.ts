export interface Book {
  title: string;
  url: string;
  description: string;
  vertical: 'scale-yourself' | 'scale-intelligence' | 'library';
  cover?: string;
}

export const books: Book[] = [
  { title: 'UNSCARED: AI', url: '#', description: 'Lead alongside AI — without fear. The anchor book for everything here.', vertical: 'library' },
  { title: 'Emotions Soup', url: '#', description: 'Making sense of the feelings that run your decisions', vertical: 'scale-yourself' },
  { title: 'Beyond the Rules', url: '#', description: 'The mental models for people who stopped following the script, on the roads', vertical: 'scale-yourself' },
  // 2 additional books — titles TBD
];
