'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-40"
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#FFFBF5] text-[#101014] rounded-full border-2 border-[#101014] shadow-[4px_4px_0_#101014] hover:shadow-[6px_6px_0_#7C3AED] hover:bg-[#101014] hover:text-[#FFFBF5] dark:bg-[#15151E] dark:text-[#F5F5FA] dark:border-white/20 dark:shadow-[4px_4px_0_#000000] dark:hover:bg-[#20202E] dark:hover:shadow-[6px_6px_0_#7C3AED] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#101014] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="font-display font-bold text-xs uppercase tracking-wider">Top</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}