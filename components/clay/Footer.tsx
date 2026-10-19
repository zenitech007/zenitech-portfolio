'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUp, Mail, MessageCircle } from 'lucide-react';
import ClayCard from './ClayCard';
import ClayPlaceholder from './ClayPlaceholder';

// Clean SVG social icons
const GithubIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 1 0-.01-2.9 1.45 1.45 0 0 0 .01 2.9m1.37 9.74v-8.37H5.09v8.37h2.74z" />
  </svg>
);

const TwitterIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  const socialLinks = [
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:zenitech007@gmail.com',
      color: 'hover:text-[#F2508A]',
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/2348102203238',
      color: 'hover:text-[#52A662]',
    },
    {
      label: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/sorunke',
      color: 'hover:text-[#8A6BD4]',
    },
    {
      label: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://linkedin.com/in/olanrewaju-sorunke',
      color: 'hover:text-[#38BDF8]',
    },
    {
      label: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com',
      color: 'hover:text-[#FFB020]',
    },
  ];

  return (
    <footer className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 sm:pb-20">
      <ClayCard
        variant="cream"
        className="p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        {/* Left: Brand & Clay Copyright */}
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-8 h-8 flex-shrink-0">
            <ClayPlaceholder name="logo-flower" alt="ZeniTech Flower" width={32} height={32} />
          </div>
          <div>
            <p className="font-heading font-bold text-base sm:text-lg text-[#4B2E25] tracking-tight">
              © 2026 ZeniTech. Built with clay &amp; care.
            </p>
            <p className="text-xs text-[#6B4A3E] font-semibold">
              Olanrewaju Sorunke • Creative Frontend &amp; AI Integration
            </p>
          </div>
        </div>

        {/* Center: Round Clay Social Icon Buttons */}
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={item.label}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -3,
                        scale: 1.08,
                        transition: { type: 'spring' as const, stiffness: 450, damping: 18 },
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.92,
                        transition: { type: 'spring' as const, stiffness: 600, damping: 15 },
                      }
                }
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFF6E8] flex items-center justify-center text-[#4B2E25] ${item.color} shadow-[0_6px_12px_-2px_rgba(75,46,37,0.12),inset_0_2px_4px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06)] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8A6BD4]`}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>

        {/* Right: "Back to top" Pill Button that squishes on hover */}
        <div>
          <motion.button
            onClick={scrollToTop}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    scale: 1.05,
                    y: -2,
                    transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
                  }
            }
            whileTap={
              shouldReduceMotion
                ? {}
                : {
                    scale: 0.94,
                    y: 1,
                    transition: { type: 'spring' as const, stiffness: 600, damping: 12 },
                  }
            }
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-b from-[#FFFDF9] to-[#F5E6CE] text-[#4B2E25] font-heading font-bold text-sm shadow-[0_6px_14px_-2px_rgba(75,46,37,0.15),inset_0_3px_5px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(0,0,0,0.08)] cursor-pointer focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8A6BD4]"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full bg-[#B49CF0] flex items-center justify-center text-[#4B2E25] shadow-[inset_0_1px_2px_rgba(255,255,255,0.7)]">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </motion.button>
        </div>
      </ClayCard>
    </footer>
  );
}
