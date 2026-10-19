import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#FCEFDD",
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
    "3D Clay Portfolio"
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${fredoka.variable} ${nunito.variable} antialiased bg-[#FCEFDD] text-[#4B2E25] font-body selection:bg-[#F2508A] selection:text-[#FFF6E8] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}