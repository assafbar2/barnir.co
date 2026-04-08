export interface Book {
  title: string;
  url: string;
  description: string;
  vertical: 'scale-yourself' | 'scale-intelligence' | 'library';
  cover?: string;
}

export const books: Book[] = [
  { title: 'UNSCARED: AI', url: 'https://unscaredai.com/', description: 'Wrote this for my aunt. Turns out I\'ve got a lot more than just one. Live alongside AI, without fear.', vertical: 'library' },
  { title: 'Emotions Soup', url: 'https://emotions-soup.carrd.co/', description: 'Understand the internal signals (emotions) driving your decisions. Before you scale any system, you need to understand the system generating the inputs', vertical: 'scale-yourself' },
  { title: 'Beyond the Rules', url: 'https://beyond-the-rules.carrd.co/', description: 'Mental models for people who write their own script. An OS update for independent thinkers.', vertical: 'scale-yourself' },
];
