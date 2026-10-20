export interface HeroContent {
  topStrip: {
    rolePrefix: string;
    availabilityStatus: string;
  };
  headline: {
    line1: string;
    line2: string;
    scriptWord: string;
  };
  subCopy: string;
  monoTag: string;
  portrait: {
    src: string;
    alt: string;
    availabilityText: string;
    rotatingBadgeText: string;
    monogram: string;
  };
}

/**
 * Global content definition for the Creative Developer Hero Section.
 * Fully editable and strictly typed.
 */
export const heroContent: HeroContent = {
  topStrip: {
    rolePrefix: '— CREATIVE DEVELOPER',
    availabilityStatus: 'AVAILABLE FOR FREELANCE',
  },
  headline: {
    line1: 'CREATIVE',
    line2: 'DEVELOPER',
    scriptWord: 'Portfolio',
  },
  subCopy: 'I DESIGN & CODE DIGITAL EXPERIENCES THAT INSPIRE.',
  monoTag: '</ CODE. DESIGN. DEPLOY />',
  portrait: {
    src: '/images/protrait.png',
    alt: 'Creative Developer portrait with ambient purple lighting',
    availabilityText: 'AVAILABLE FOR PROJECTS',
    rotatingBadgeText: 'CREATIVE DEVELOPER • CODE. DESIGN. DEPLOY. • ',
    monogram: 'CD',
  },
} as const;
