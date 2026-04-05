export interface Project {
  name: string;
  url: string;
  description: string;
  vertical: 'scale-yourself' | 'scale-intelligence' | 'scale-business';
  type: 'app' | 'platform' | 'tool' | 'site';
}

export const projects: Project[] = [
  // Scale Yourself
  { name: 'Vessel', url: '#', description: 'Wellness tracking app for your Human OS', vertical: 'scale-yourself', type: 'app' },
  { name: 'Nuudge', url: 'https://nuudge.app', description: 'Behavioral nudge system (identity TBD)', vertical: 'scale-yourself', type: 'app' },
  { name: 'Gram-Reaper', url: '#', description: 'Habit elimination tool', vertical: 'scale-yourself', type: 'app' },

  // Scale Intelligence
  { name: 'Agent Switchboard', url: 'https://agentswitchboard.dev', description: 'Route and orchestrate AI agents at scale', vertical: 'scale-intelligence', type: 'tool' },

  // Scale Business
  { name: 'upgrAIde', url: 'https://upgrai.de', description: 'AI upskilling platform for modern teams', vertical: 'scale-business', type: 'platform' },
  { name: 'barnirhired', url: 'https://barnirhired.com', description: 'Hiring and talent strategy for CS teams', vertical: 'scale-business', type: 'site' },
  { name: 'GiFOC', url: 'https://gifoc.com', description: 'Get in Front of Customers — customer-facing leadership', vertical: 'scale-business', type: 'site' },
];
