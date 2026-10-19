'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export type ClayCardVariant = 'cream' | 'lavender' | 'pink' | 'pink-soft' | 'mint' | 'sunny';

interface ClayCardProps {
  children: React.ReactNode;
  variant?: ClayCardVariant;
  className?: string;
  enableHover?: boolean;
  onClick?: () => void;
}

const variantClassMap: Record<ClayCardVariant, string> = {
  cream: 'clay-cream text-[#4B2E25]',
  lavender: 'clay-lavender text-[#4B2E25]',
  pink: 'clay-pink text-[#FFF6E8]',
  'pink-soft': 'clay-pink-soft text-[#4B2E25]',
  mint: 'clay-mint text-[#4B2E25]',
  sunny: 'clay-sunny text-[#4B2E25]',
};

export default function ClayCard({
  children,
  variant = 'cream',
  className = '',
  enableHover = true,
  onClick,
}: ClayCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const motionProps =
    enableHover && !shouldReduceMotion
      ? {
          whileHover: { y: -6, transition: { type: 'spring' as const, stiffness: 300, damping: 15 } },
          whileTap: { scale: 0.98, y: -2, transition: { type: 'spring' as const, stiffness: 400, damping: 15 } },
        }
      : {};

  return (
    <motion.div
      {...motionProps}
      onClick={onClick}
      className={`clay p-6 sm:p-8 md:p-10 ${variantClassMap[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
