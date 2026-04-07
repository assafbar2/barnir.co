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
    title: 'Why Your CS Team Isn\'t Surviving the AI Transition',
    description: 'The playbook most CS leaders are running is built for a world that no longer exists.',
    url: 'https://barnir.substack.com/s/customer-success-ai-edition',
    date: '2026-04-01',
  },
  {
    type: 'product',
    label: 'Latest build',
    title: 'Agent Switchboard v2',
    description: 'Agent-to-agent routing with context persistence. Beta.',
    url: 'https://agentswitchboard.dev',
    date: '2026-03-20',
  },
  {
    type: 'book',
    label: 'Latest book',
    title: 'UNSCARED: AI',
    description: 'How I wrote a book with AI — and what it taught me about working alongside it without fear. 2nd edition in the works.',
    url: 'https://barnir.substack.com/p/excerpt-from-unscared-ai',
    date: '2026-02-15',
  },
];
