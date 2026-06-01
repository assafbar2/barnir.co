export interface BuyLinks {
  amazon?: string;
  google?: string;
  audible?: string;
  other?: { label: string; url: string }[];
}

export interface CtaLink {
  label: string;
  url: string;
  primary?: boolean;
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
  thesis?: string;
  templates?: string[];
  testimonial?: { text: string; author: string };
  buyLinks?: BuyLinks;
  ctaLinks?: CtaLink[];
  badge?: string;
  note?: string;
  comingSoon?: boolean;
  isFeatured?: boolean;
}

export const books: Book[] = [
  {
    title: 'The Support Machine',
    subtitle: 'How to Deploy AI in Customer Support Without Breaking Trust',
    url: 'https://assafbar2.github.io/the-support-machine/',
    description: 'Written for CS leaders and support engineers who are past the hype and need to actually ship this. Covers diagnosing the queue, evaluating vendors, designing the architecture, running the shadow test, surviving launch day, and operating the machine 30 days in. Then it becomes the tool — install it as an AI skill and use it to build the artifacts while you work.',
    vertical: 'library',
    tags: ['Scale Business', 'CS & Support'],
    hook: '// This is not a chatbot book. It\'s a field guide for the migration.',
    thesis: 'AI support is not a chatbot project. It is an operating model migration.',
    templates: [
      'Vendor scorecard',
      'Shadow run scorecard',
      'Launch runbook',
      'First 30 days review',
      'Operating model',
      'AI rollout plan',
    ],
    ctaLinks: [
      { label: 'Read online →', url: 'https://assafbar2.github.io/the-support-machine/', primary: true },
      { label: 'Use the skill →', url: 'https://assafbar2.github.io/the-support-machine/skill.html' },
      { label: 'Download PDF', url: 'https://assafbar2.github.io/the-support-machine/the-support-machine-v0.2.pdf' },
      { label: 'GitHub →', url: 'https://github.com/assafbar2/the-support-machine' },
    ],
    badge: 'Just shipped',
    isFeatured: true,
  },
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
];
