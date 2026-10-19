'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import ClayPlaceholder from './ClayPlaceholder';
import ClayButton from './ClayButton';

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = 'home' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-3 sm:top-5 z-50 max-w-6xl mx-auto px-4 sm:px-6 select-none">
      <nav className="clay clay-cream px-5 py-3 sm:py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#8A6BD4] rounded-full p-1"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
            <ClayPlaceholder name="logo-flower" width={40} height={40} alt="ZeniTech Flower Logo" priority />
          </div>
          <span className="font-heading font-bold text-2xl sm:text-[1.75rem] text-[#4B2E25] tracking-tight leading-none">
            Zeni<span className="text-[#F2508A]">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 bg-[#FCEFDD] p-1.5 rounded-full shadow-[inset_0_2px_4px_rgba(75,46,37,0.08),inset_0_-2px_4px_rgba(255,255,255,0.85)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-5 py-2 text-base font-heading font-bold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8A6BD4] ${
                  isActive
                    ? 'text-[#4B2E25]'
                    : 'text-[#6B4A3E] hover:text-[#4B2E25]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring' as const, stiffness: 380, damping: 25 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-b from-[#C2ABF7] to-[#8A6BD4] shadow-[0_6px_14px_-2px_rgba(138,107,212,0.45),inset_0_2px_4px_rgba(255,255,255,0.7),inset_0_-2px_4px_rgba(75,40,140,0.2)] -z-10"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <ClayButton
            variant="pink"
            href="#contact"
            className="!px-5 !py-2.5 sm:!px-6 sm:!py-3 !text-sm sm:!text-base"
            ariaLabel="Hire Me"
          >
            <Mail className="w-4 h-4 mr-1.5" />
            <span>Hire Me</span>
          </ClayButton>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#FFF6E8] text-[#4B2E25] shadow-[0_6px_12px_rgba(180,140,110,0.25),inset_0_2px_4px_rgba(255,255,255,0.95)] active:scale-95 transition-transform"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ type: 'spring' as const, stiffness: 350, damping: 24 }}
            className="md:hidden mt-3 clay clay-cream p-6 flex flex-col gap-3 shadow-2xl"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-5 py-3 rounded-2xl font-heading font-bold text-lg text-center transition-colors ${
                    isActive
                      ? 'bg-gradient-to-b from-[#C2ABF7] to-[#8A6BD4] text-[#4B2E25] shadow-[0_6px_12px_rgba(138,107,212,0.35)]'
                      : 'text-[#4B2E25] hover:bg-[#FCEFDD]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
