export interface FeaturedProject {
  index: string;
  title: string;
  subtitle: string;
  // TODO: Replace with custom project screenshots at /public/images/projects/[slug].jpg
  image: string;
  tags: readonly string[];
  // TODO: Replace with production live URLs
  liveUrl: string;
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    index: '01',
    title: 'PROJECTMATE AI',
    subtitle: 'AI Academic Assistant & SaaS',
    image: '/og-image.jpg',
    tags: ['AI Integration', 'Next.js', 'TypeScript'],
    liveUrl: 'https://projectmate-485110.web.app/',
  },
  {
    index: '02',
    title: 'AURA SKINCARE',
    subtitle: 'Luxury E-Commerce Storefront',
    image: '/og-image.jpg',
    tags: ['UI/UX Design', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://skincare-landing-seven.vercel.app/',
  },
  {
    index: '03',
    title: 'SWITCH ARCHITECTURE',
    subtitle: 'Engineering Portfolio & Blog Engine',
    image: '/og-image.jpg',
    tags: ['Web Development', 'Design System', 'SEO'],
    liveUrl: 'https://switch-architect.vercel.app/',
  },
] as const;
