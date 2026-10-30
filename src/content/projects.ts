export type ProjectCategory = 'ai' | 'ecommerce' | 'platform' | 'tools';

export interface ProjectCategoryInfo {
  id: ProjectCategory;
  /** Label shown on the filter tab and the card chip */
  label: string;
}

// Order here = order of the filter tabs on the home page
export const PROJECT_CATEGORIES: readonly ProjectCategoryInfo[] = [
  { id: 'ai', label: 'AI & SaaS' },
  { id: 'ecommerce', label: 'E-Commerce' },
  { id: 'platform', label: 'Platforms' },
  { id: 'tools', label: 'Tools & Creative' },
] as const;

export interface FeaturedProject {
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  /**
   * Optional real screenshot, e.g. '/images/projects/projectmate.jpg'.
   * Leave it out and the card shows its animated category artwork instead.
   */
  image?: string;
  /** Picks an alternate animated artwork when two projects share a category */
  artVariant?: 0 | 1;
  tags: readonly string[];
  liveUrl: string;
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    index: '01',
    slug: 'projectmate-ai',
    title: 'PROJECTMATE AI',
    subtitle: 'AI Academic Assistant & SaaS',
    category: 'ai',
    tags: ['AI Integration', 'Next.js', 'TypeScript'],
    liveUrl: 'https://projectmate-485110.web.app/',
  },
  {
    index: '02',
    slug: 'gaposa',
    title: 'GAPOSA',
    subtitle: 'Polytechnic Website & Programme Directory',
    category: 'platform',
    artVariant: 1,
    tags: ['Education', 'Programme Directory', 'Admissions UX'],
    liveUrl: 'https://gaposa-fawn.vercel.app/',
  },
  {
    index: '03',
    slug: 'echopix',
    title: 'ECHOPIX',
    subtitle: 'AI Study Deck & Flashcard Generator',
    category: 'ai',
    artVariant: 1,
    tags: ['AI Integration', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://echopix.vercel.app/',
  },
  {
    index: '04',
    slug: 'aura-skincare',
    title: 'AURA SKINCARE',
    subtitle: 'Luxury E-Commerce Storefront',
    category: 'ecommerce',
    tags: ['UI/UX Design', 'Next.js', 'Tailwind CSS'],
    liveUrl: 'https://skincare-landing-seven.vercel.app/',
  },
  {
    index: '05',
    slug: 'cable-logistics',
    title: 'CABLE LOGISTICS',
    subtitle: 'Global Freight & Procurement',
    category: 'ecommerce',
    artVariant: 1,
    tags: ['Logistics & Freight', 'Motion & Canvas', 'Tailwind CSS'],
    liveUrl: 'https://cable-logistics.vercel.app/',
  },
  {
    index: '06',
    slug: 'switch-architecture',
    title: 'SWITCH ARCHITECTURE',
    subtitle: 'Engineering Portfolio & Blog Engine',
    category: 'platform',
    tags: ['Web Development', 'Design System', 'SEO'],
    liveUrl: 'https://switch-architect.vercel.app/',
  },
  {
    index: '07',
    slug: 'safe-convert',
    title: 'SAFE CONVERT',
    subtitle: 'Privacy-First Image Converter',
    category: 'tools',
    tags: ['Client-Side', 'Next.js', 'Privacy'],
    liveUrl: 'https://safe-convert-seven.vercel.app',
  },
  {
    index: '08',
    slug: 'social-ui-template',
    title: 'SOCIAL-UI TEMPLATE',
    subtitle: 'Social-Style Portfolio with a 3D Scene',
    category: 'tools',
    artVariant: 1,
    tags: ['Three.js', 'Framer Motion', 'Next.js'],
    liveUrl: 'https://arch-portfolio-eight.vercel.app/',
  },
] as const;
