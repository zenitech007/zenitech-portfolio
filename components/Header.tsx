'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const WHATSAPP_URL = 'https://wa.me/2348149636378';

// id = the section id on the home page (used for the active-link highlight)
const NAV_LINKS = [
  { id: 'home', label: 'HOME', href: '/' },
  { id: 'services', label: 'SERVICES', href: '/#services' },
  { id: 'work', label: 'WORK', href: '/#work' },
  { id: 'contact', label: 'CONTACT', href: '#contact' },
] as const;

// Sections that don't have their own nav item highlight the closest one
const SECTION_TO_NAV: Record<string, string> = { process: 'work' };

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sectionInView, setSectionInView] = useState('home');

  // Scroll-spy: highlight the nav item for the section in the middle of the screen (home page only)
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = ['home', 'services', 'work', 'process', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSectionInView(SECTION_TO_NAV[entry.target.id] ?? entry.target.id);
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const activeId =
    pathname === '/' ? sectionInView : pathname.startsWith('/portfolio') ? 'work' : '';

  const linkClass = (id: string) =>
    `font-mono text-[12px] uppercase tracking-[0.15em] transition-colors duration-200 focus:outline-none focus-visible:text-white ${
      activeId === id ? 'text-[#a78bfa]' : 'text-[#a8a5b8] hover:text-[#f4f4f6]'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#08070d]/70 backdrop-blur-md">
      <div className="mx-auto grid h-14 w-full max-w-[1440px] grid-cols-[1fr_auto] items-center px-[4%] md:grid-cols-[1fr_auto_1fr]">
        {/* ── Brand ── */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          aria-label="ZeniTech — home"
          className="group flex w-fit items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a80f0] rounded"
        >
          <span
            aria-hidden="true"
            className="h-px w-3.5 bg-[#9a80f0] transition-all duration-300 group-hover:w-5"
          />
          <span className="font-mono text-[13px] font-semibold tracking-[0.08em] text-[#f4f4f6]">
            ZeniTech
          </span>
        </Link>

        {/* ── Desktop nav (centered) ── */}
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={linkClass(link.id)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── Right: Let's Talk (WhatsApp) + mobile menu toggle ── */}
        <div className="flex items-center justify-end gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Let's talk — chat with ZeniTech on WhatsApp"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-b from-[#9a80f0] to-[#7b5ce0] px-4 py-2 font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-[0_0_22px_rgba(123,92,224,0.45)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(154,128,240,0.65)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d7ccff] sm:px-5 sm:text-[12px]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#d7ccff] transition-colors hover:border-[#9a80f0]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9a80f0] md:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: 'easeOut' }}
            className="border-t border-white/[0.06] bg-[#0a0814]/95 px-[4%] py-3 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`block border-b border-white/[0.04] py-3.5 last:border-b-0 ${linkClass(link.id)}`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
