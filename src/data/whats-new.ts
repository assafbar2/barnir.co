// Edit this file and push to update the homepage "Recent Signal" section.
// No backend required. One file, one push.

export interface WhatsNewItem {
  type: 'post' | 'product' | 'book';
  label: string;
  title: string;
  description: string;
  url: string;
  date: string; // ISO date string
}

export const whatsNew: WhatsNewItem[] = [
  {
    type: 'post',
    label: 'Latest writing',
    title: 'Excerpt from UNSCARED: AI',
    description: 'A chapter from the book — what it actually means to lead alongside AI without fear. 2nd edition in the works.',
    url: 'https://barnir.substack.com/p/excerpt-from-unscared-ai',
    date: '2026-04-01',
  },
  {
    type: 'product',
    label: 'Latest build',
    title: 'Agent Switchboard v2',
    description: 'Multi-agent routing with context persistence. Route AI agents like you route customer tickets.',
    url: 'https://agentswitchboard.dev',
    date: '2026-03-20',
  },
  {
    type: 'book',
    label: 'Latest book',
    title: 'UNSCARED: AI',
    description: 'The framework for leading alongside AI — not behind it, not despite it. 2nd edition in the works.',
    url: 'https://barnir.substack.com/p/excerpt-from-unscared-ai',
    date: '2026-02-15',
  },
];
