export interface BuyLinks {
  amazon?: string;
  google?: string;
  audible?: string;
  other?: { label: string; url: string }[];
}

export interface Book {
  title: string;
  subtitle?: string;
  url: string;
  /** May contain <strong> tags for emphasis. Use set:html in templates. */
  description: string;
  vertical: 'scale-yourself' | 'scale-intelligence' | 'library';
  tags?: string[];
  cover?: string;
  hook?: string;
  testimonial?: { text: string; author: string };
  buyLinks?: BuyLinks;
  badge?: string;
  note?: string;
  comingSoon?: boolean;
}

export const books: Book[] = [
  {
    title: 'UNSCARED: AI',
    url: 'https://unscaredai.com/',
    description: 'Every generation gets one technology that splits people into camps — the panicked, the zealots, and the vast majority caught between them. <strong>This book is for the majority.</strong> No doomsday predictions, no blind hype. A hype-free, panic-free guide to what AI actually is — and how to live alongside it without fear. The 2nd edition is in progress.',
    vertical: 'library',
    tags: ['AI', 'Scale Intelligence', 'Series: Unscared'],
    cover: '/images/books/unscared-ai-cover.jpg',
    hook: '// I wrote this for my aunt. Turns out she wasn\'t alone.',
    testimonial: {
      text: 'Refreshing and insightful. The book you hand someone who\'s afraid of AI, but won\'t admit it.',
      author: 'Lior',
    },
    buyLinks: {
      amazon: 'https://www.amazon.com/dp/B0F3MJ344Y',
      google: 'https://play.google.com/store/books/details?id=JoZTEQAAQBAJ',
      other: [
        { label: 'Books2Read', url: 'https://books2read.com/UNSCARED-AI/' },
        { label: 'unscaredai.com', url: 'https://unscaredai.com/' },
      ],
    },
    badge: '2nd ed. →',
  },
  {
    title: 'Emotions Soup',
    url: 'https://www.amazon.com/dp/B0D3S5CSB2',
    description: 'Before you scale anything — a team, a product, yourself — you need to understand <strong>the system generating the inputs.</strong> That system is you. This is an exploration of the emotions I found most interesting: their origins, their signals, and how to work with them instead of being worked by them. No therapy clichés. No asking about your parents.',
    vertical: 'scale-yourself',
    tags: ['Human OS', 'Scale Yourself', 'Psychology'],
    cover: '/images/books/emotions-soup-cover.jpg',
    hook: '// No "how did that make you feel?" in here. Promise.',
    testimonial: {
      text: 'What stood out was the author\'s ability to dive deep into emotions without resorting to cliché therapy questions.',
      author: 'Emily',
    },
    buyLinks: {
      amazon: 'https://www.amazon.com/dp/B0D3S5CSB2',
      google: 'https://play.google.com/store/books/details?id=4foGEQAAQBAJ',
      audible: 'https://play.google.com/store/audiobooks/details?id=AQAAAEDiMRhx6M',
    },
    note: 'Proceeds donated',
  },
  {
    title: 'Beyond the Rules',
    url: 'https://www.amazon.com/Beyond-Rules-Drive-Smart-Survive/dp/B0CHW9J46Q',
    description: 'Starts as a guide for new drivers. Doesn\'t stay there. The rules of the road are just the frame — the real subject is <strong>the mindset that separates capable from good.</strong> Defensive thinking, hazard awareness, the physics of consequences. The kind of book that works whether you\'ve been driving 30 years or 30 days.',
    vertical: 'scale-yourself',
    tags: ['Human OS', 'Scale Yourself', 'Driving', 'Life'],
    cover: '/images/books/beyond-the-rules-cover.jpg',
    hook: '// A driving book that\'s actually about how you think.',
    testimonial: {
      text: 'Not just about being a safe driver. It\'s about becoming a responsible, compassionate individual.',
      author: 'Andi',
    },
    buyLinks: {
      amazon: 'https://www.amazon.com/Beyond-Rules-Drive-Smart-Survive/dp/B0CHW9J46Q',
      google: 'https://play.google.com/store/books/details/Barnir_Beyond_the_Rules_Drive_Smart_Stay_Safe_and?id=xbvLEAAAQBAJ',
    },
    note: 'Revenue → Kailee Mills Foundation',
  },
  {
    title: 'UNSCARED: The Machine Shift',
    subtitle: 'A Systematic Guide to the AI Migration Files',
    url: 'https://barnir.substack.com/',
    description: 'The follow-up to UNSCARED: AI — going deeper into what it actually takes to move your work, your team, and your thinking into the AI era. <strong>Not theory.</strong> Filed observations from the transition.',
    vertical: 'library',
    tags: ['AI', 'Scale Intelligence', 'Series: Unscared'],
    hook: '// The migration has already started. This is the field guide.',
    badge: 'Coming soon',
    comingSoon: true,
  },
];
