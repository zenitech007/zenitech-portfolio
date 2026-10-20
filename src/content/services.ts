export type ServiceIconType = 'pen-nodes' | 'code' | 'cube' | 'lightning';

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  icon: ServiceIconType;
}

export const services: readonly ServiceItem[] = [
  {
    index: '01',
    title: 'WEB DESIGN',
    description:
      'Designing bespoke, brand-focused digital identities and landing pages with artful typography and motion.',
    icon: 'pen-nodes',
  },
  {
    index: '02',
    title: 'WEB DEVELOPMENT',
    description:
      'Building performant, accessible full-stack applications with Next.js, TypeScript, and modern component architectures.',
    icon: 'code',
  },
  {
    index: '03',
    title: 'UI/UX DESIGN',
    description:
      'Crafting intuitive user journeys, wireframes, and design systems in Figma that prioritize clarity and user delight.',
    icon: 'cube',
  },
  {
    index: '04',
    title: 'OPTIMIZATION',
    description:
      'Auditing and tuning Core Web Vitals, responsiveness, and rendering speeds for sub-second page transitions.',
    icon: 'lightning',
  },
] as const;
