'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type ClayButtonVariant = 'lavender' | 'pink' | 'cream' | 'mint';

interface ClayButtonProps {
  children: React.ReactNode;
  variant?: ClayButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles: Record<ClayButtonVariant, string> = {
  lavender: 'clay-btn-lavender',
  pink: 'clay-btn-pink',
  cream: 'clay-btn-cream',
  mint: 'clay-mint text-[#4B2E25]',
};

export default function ClayButton({
  children,
  variant = 'lavender',
  href,
  onClick,
  className = '',
  target,
  rel,
  ariaLabel,
  type = 'button',
}: ClayButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.04, transition: { type: 'spring' as const, stiffness: 400, damping: 15 } },
        whileTap: { scale: 0.96, y: 2, transition: { type: 'spring' as const, stiffness: 500, damping: 12 } },
      };

  const sharedClasses = `clay-btn px-6 py-3.5 sm:px-8 sm:py-4 text-base sm:text-lg tracking-tight ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}
        className={sharedClasses}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}
      className={sharedClasses}
    >
      {children}
    </motion.button>
  );
}
