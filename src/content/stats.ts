export interface HeroStat {
  value: string;
  label: string;
}

/**
 * Stats strip metrics directly below the hero.
 * Value: Anton, white. Label: mono 10px, zinc-500, tracking-widest.
 */
export const heroStats: readonly HeroStat[] = [
  {
    value: '4+',
    label: 'YEARS EXPERIENCE',
  },
  {
    value: '40+',
    label: 'PROJECTS DELIVERED',
  },
  {
    value: '25+',
    label: 'HAPPY CLIENTS',
  },
  {
    value: '10+',
    label: 'TECHNOLOGIES',
  },
] as const;

// Backwards compatibility for other downstream sections if needed
export const stats = [
  {
    value: '4+',
    label: 'Years in Production',
    context: 'Engineering web applications & digital platforms',
  },
  {
    value: '40+',
    label: 'Projects Delivered',
    context: 'Full-cycle production web apps & UI systems',
  },
  {
    value: '25+',
    label: 'Happy Clients',
    context: 'Startups, studios & specialized agencies',
  },
  {
    value: '10+',
    label: 'Technologies',
    context: 'Disciplined modern toolchain execution',
  },
] as const;
