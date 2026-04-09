import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeniTech | Olanrewaju Sorunke",
  description: "Portfolio of Olanrewaju Sorunke, a Frontend Developer, UI/UX Designer, and AI integration specialist building scalable SaaS platforms and high-performance web systems.",
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "AI Integration",
    "Next.js Developer",
    "React",
    "Web Developer Nigeria",
    "ZeniTech",
    "Olanrewaju Sorunke"
  ],
  authors: [{ name: "Olanrewaju Sorunke" }],
  creator: "Olanrewaju Sorunke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenitech-phi.vercel.app",
    title: "ZeniTech | Olanrewaju Sorunke",
    description: "Portfolio of Olanrewaju Sorunke, a Frontend Developer, UI/UX Designer, and AI integration specialist.",
    siteName: "ZeniTech",
    images: [
      {
        url: "/og-image.jpg", // This references a file in your public folder
        width: 1200,
        height: 630,
        alt: "ZeniTech Portfolio - Olanrewaju Sorunke",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeniTech | Olanrewaju Sorunke",
    description: "Frontend Developer, UI/UX Designer, and AI integration specialist.",
    images: ["/og-image.jpg"], // This references a file in your public folder
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}