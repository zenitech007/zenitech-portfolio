export type SocialIconType = 'github' | 'linkedin' | 'dribbble' | 'behance';

export interface SocialLink {
  label: string;
  icon: SocialIconType;
  href: string;
}

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/larryking007',
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://linkedin.com/in/olanrewaju-sorunke',
  },
  {
    label: 'Dribbble',
    icon: 'dribbble',
    href: 'https://dribbble.com',
  },
  {
    label: 'Behance',
    icon: 'behance',
    href: 'https://behance.net',
  },
] as const;

export const footerTagline = '</ CODE IS MY CRAFT DESIGN IS MY VOICE />';
