import type { Metadata, Viewport } from 'next';
import { Anton, Allura, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { profile } from '@/src/content/profile';
import Header from '@/components/Header';

const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const allura = Allura({
  variable: '--font-allura',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const viewport: Viewport = {
  themeColor: '#08070d',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zenitech-phi.vercel.app'),
  title: `${profile.name} — Creative Developer | Portfolio`,
  description: 'Creative Developer portfolio designing and coding digital experiences that inspire. Code, Design, Deploy.',
  keywords: [
    'Creative Developer',
    'Frontend Developer',
    'Next.js Developer',
    'Design Engineer',
    'Digital Experiences',
    'TypeScript',
    'Tailwind CSS',
    'Web Architecture',
  ],
  authors: [{ name: profile.name, url: 'https://zenitech-phi.vercel.app' }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenitech-phi.vercel.app',
    title: `${profile.name} — Creative Developer`,
    description: 'I design & code digital experiences that inspire.',
    siteName: `${profile.name} Portfolio`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${profile.name} — Creative Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — Creative Developer`,
    description: 'I design & code digital experiences that inspire.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth scroll-pt-20">
      <body
        className={`${anton.variable} ${allura.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#08070d] text-[#f4f4f6] font-sans min-h-screen selection:bg-[#7b5ce0] selection:text-white`}
      >
        {/* Accessible skip link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#8B5CF6] focus:text-white focus:font-semibold focus:rounded focus:outline-none"
        >
          Skip to main content
        </a>
        <Header />
        {children}
      </body>
    </html>
  );
}