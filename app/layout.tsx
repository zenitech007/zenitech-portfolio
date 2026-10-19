import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFBF5" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zenitech-phi.vercel.app"),
  title: "Olanrewaju Sorunke — Creative Developer & AI Specialist | ZeniTech",
  description: "Portfolio of Olanrewaju Sorunke. Senior frontend engineer, creative developer, and AI integration specialist crafting bold, motion-rich SaaS platforms and high-performance digital experiences.",
  keywords: [
    "Olanrewaju Sorunke",
    "ZeniTech",
    "Creative Developer",
    "Frontend Engineer",
    "UI/UX Designer",
    "AI Integration",
    "Next.js Developer",
    "React 19",
    "Tailwind CSS v4",
    "TypeScript",
    "Award Winning Portfolio"
  ],
  authors: [{ name: "Olanrewaju Sorunke" }],
  creator: "Olanrewaju Sorunke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenitech-phi.vercel.app",
    title: "Olanrewaju Sorunke — Creative Developer & AI Specialist | ZeniTech",
    description: "Creative developer crafting bold, motion-rich SaaS platforms, AI integrations, and high-impact digital experiences.",
    siteName: "ZeniTech Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeniTech Portfolio — Olanrewaju Sorunke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olanrewaju Sorunke — Creative Developer & AI Specialist | ZeniTech",
    description: "Creative developer crafting bold, motion-rich SaaS platforms, AI integrations, and high-impact digital experiences.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (stored === 'dark' || (!stored && systemDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}