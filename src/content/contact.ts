export type ContactIconType = 'email' | 'phone' | 'website' | 'location';

export interface ContactRow {
  icon: ContactIconType;
  label: string;
  href?: string;
}

export const contactDetails: readonly ContactRow[] = [
  {
    icon: 'email',
    label: 'zenitech007@gmail.com',
    href: 'mailto:zenitech007@gmail.com',
  },
  {
    icon: 'phone',
    label: '+234 810 220 3238',
    href: 'tel:+2348102203238',
  },
  {
    icon: 'website',
    label: 'zenitech-phi.vercel.app',
    href: 'https://zenitech-phi.vercel.app',
  },
  {
    icon: 'location',
    label: 'Based in Lagos, Nigeria (UTC+1)',
  },
] as const;
