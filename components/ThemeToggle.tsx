'use client';

import React, { useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

function subscribeToTheme(callback: () => void) {
  if (typeof window === 'undefined') return () => {};

  // Observe class mutations on <html>
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        callback();
      }
    }
  });
  observer.observe(document.documentElement, { attributes: true });

  // Listen to system media query changes if no manual preference is stored
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const handleSystemChange = (e: MediaQueryListEvent) => {
    const stored = localStorage.getItem('theme');
    if (!stored) {
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      callback();
    }
  };
  mq.addEventListener('change', handleSystemChange);

  return () => {
    observer.disconnect();
    mq.removeEventListener('change', handleSystemChange);
  };
}

function getThemeSnapshot(): boolean {
  if (typeof window === 'undefined') return false;
  return document.documentElement.classList.contains('dark');
}

function getThemeServerSnapshot(): boolean {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getThemeServerSnapshot
  );

  const toggleTheme = () => {
    const nextDark = !isDark;

    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#101014] bg-[#FFFBF5] text-[#101014] shadow-[3px_3px_0_#101014] hover:shadow-[4px_4px_0_#7C3AED] dark:border-white/20 dark:bg-[#15151E] dark:text-[#F5F5FA] dark:shadow-[3px_3px_0_#7C3AED] dark:hover:shadow-[4px_4px_0_#FF4D6D] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#FFB020]" />
        ) : (
          <Moon className="w-4 h-4 text-[#7C3AED]" />
        )}
      </motion.div>
    </motion.button>
  );
}
