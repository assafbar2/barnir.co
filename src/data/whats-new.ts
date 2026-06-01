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
    title: 'The Support Machine',
    description: 'A full manuscript and executable AI skill for deploying AI in customer support without breaking trust. Free and open source.',
    url: 'https://assafbar2.github.io/the-support-machine/',
    date: '2026-05-31',
  },
];
