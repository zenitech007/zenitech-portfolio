'use client';

import React, { useRef, useState, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  variant?: 'gradient' | 'outline' | 'amber' | 'ink';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

function subscribeToFinePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export default function MagneticButton({
  children,
  variant = 'gradient',
  href,
  onClick,
  className = '',
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const canHover = useSyncExternalStore(
    subscribeToFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !buttonRef.current) return;

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Subtle magnetic strength (translates max ~12-16px toward cursor)
    const distanceX = (e.clientX - centerX) * 0.28;
    const distanceY = (e.clientY - centerY) * 0.28;

    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    gradient:
      'bg-gradient-to-r from-[#7C3AED] via-[#FF4D6D] to-[#FFB020] text-[#FFFBF5] shadow-[4px_4px_0_#101014] hover:shadow-[6px_6px_0_#101014] dark:shadow-[4px_4px_0_#000000] dark:hover:shadow-[6px_6px_0_#7C3AED] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#101014] border-2 border-[#101014] dark:border-white/25',
    outline:
      'bg-[#FFFBF5] text-[#101014] border-2 border-[#101014] shadow-[4px_4px_0_#101014] hover:bg-[#101014] hover:text-[#FFFBF5] hover:shadow-[6px_6px_0_#7C3AED] dark:bg-[#15151E] dark:text-[#F5F5FA] dark:border-white/20 dark:shadow-[4px_4px_0_#000000] dark:hover:bg-[#20202E] dark:hover:shadow-[6px_6px_0_#7C3AED] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#101014]',
    amber:
      'bg-[#FFB020] text-[#101014] border-2 border-[#101014] shadow-[4px_4px_0_#101014] hover:shadow-[6px_6px_0_#101014] dark:shadow-[4px_4px_0_#000000] active:translate-x-[2px] active:translate-y-[2px]',
    ink:
      'bg-[#101014] text-[#FFFBF5] border-2 border-[#101014] shadow-[4px_4px_0_#7C3AED] hover:shadow-[6px_6px_0_#FF4D6D] dark:bg-white/10 dark:border-white/20 dark:shadow-[4px_4px_0_#000000] active:translate-x-[2px] active:translate-y-[2px]',
  };

  const baseContent = (
    <span className="relative z-10 flex items-center justify-center gap-2 font-display font-bold tracking-tight text-sm md:text-base">
      {children}
    </span>
  );

  const sharedClasses = `relative inline-flex items-center justify-center px-7 py-3.5 rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${variantStyles[variant]} ${className}`;

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={sharedClasses}
        >
          {baseContent}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={sharedClasses}
        >
          {baseContent}
        </button>
      )}
    </motion.div>
  );
}
