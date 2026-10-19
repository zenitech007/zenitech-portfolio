'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type ViewportOptions = NonNullable<React.ComponentProps<typeof motion.div>['viewport']>;
type ViewportMargin = ViewportOptions['margin'];

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
  margin?: ViewportMargin;
}

export const CUBIC_EASE = [0.22, 1, 0.36, 1] as const;

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.75,
  className = '',
  margin = '-80px',
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = 40;
  const initialVariants = {
    up: { opacity: 0, y: offset, x: 0 },
    down: { opacity: 0, y: -offset, x: 0 },
    left: { opacity: 0, x: offset, y: 0 },
    right: { opacity: 0, x: -offset, y: 0 },
    none: { opacity: 0, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={initialVariants[direction]}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin }}
      transition={{
        duration,
        delay,
        ease: CUBIC_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}