export interface Project {
  name: string;
  url: string;
  description: string;
  vertical: 'scale-yourself' | 'scale-intelligence' | 'scale-business';
  type: 'app' | 'platform' | 'tool' | 'site';
}

export const projects: Project[] = [
  // Scale Yourself
  { name: 'Vessel', url: '#', description: 'A writing space that breathes with your Humann OS', vertical: 'scale-yourself', type: 'app' },
  { name: 'Nuudge', url: 'https://nuudge.app', description: 'Human to Human behavioral nudge system ', vertical: 'scale-yourself', type: 'app' },
  { name: 'Gram-Reaper', url: '#', description: 'Monofocus execution tool—because priority is, by definition, singular.', vertical: 'scale-yourself', type: 'app' },

  // Scale Intelligence
  { name: 'Agent Switchboard', url: 'https://agentswitchboard.dev', description: 'Route and orchestrate AI agents at scale', vertical: 'scale-intelligence', type: 'tool' },

  // Scale Business
  { name: 'upgrAIde', url: 'https://upgrai.de', description: 'AI upskilling platform for modern customer facing teams', vertical: 'scale-business', type: 'platform' },
  { name: 'barnirhired', url: 'https://barnirhired.com', description: 'Systematic expert career strategy for high-growth tech roles', vertical: 'scale-business', type: 'site' },
  { name: 'GiFOC', url: 'https://gifoc.com', description: 'Get in Front of Customers — or else', vertical: 'scale-business', type: 'site' },
];
