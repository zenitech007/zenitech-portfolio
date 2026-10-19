'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type ClayTileVariant = 'lavender' | 'pink' | 'mint' | 'sunny' | 'cream';

interface ClayIconTileProps {
  children: React.ReactNode;
  variant?: ClayTileVariant;
  className?: string;
}

const tileVariants: Record<ClayTileVariant, string> = {
  lavender: 'clay-lavender text-[#4B2E25]',
  pink: 'clay-pink text-[#FFF6E8]',
  mint: 'clay-mint text-[#4B2E25]',
  sunny: 'clay-sunny text-[#4B2E25]',
  cream: 'clay-cream text-[#4B2E25]',
};

export default function ClayIconTile({
  children,
  variant = 'lavender',
  className = '',
}: ClayIconTileProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: {
          rotate: [0, -4, 4, -2, 2, 0],
          scale: 1.05,
          transition: { duration: 0.45, ease: 'easeInOut' as const },
        },
      };

  return (
    <motion.div
      {...motionProps}
      className={`clay-icon-tile ${tileVariants[variant]} shadow-lg cursor-pointer select-none ${className}`}
    >
      {children}
    </motion.div>
  );
}
