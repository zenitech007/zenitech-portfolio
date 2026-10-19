'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Reveal from './Reveal';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'violet' | 'coral' | 'amber' | 'sky';
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeColor = 'violet',
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const badgeStyles = {
    violet: 'bg-[#7C3AED] text-[#FFFBF5] border-[#101014] dark:border-white/20',
    coral: 'bg-[#FF4D6D] text-[#FFFBF5] border-[#101014] dark:border-white/20',
    amber: 'bg-[#FFB020] text-[#101014] border-[#101014] dark:border-white/20',
    sky: 'bg-[#38BDF8] text-[#101014] border-[#101014] dark:border-white/20',
  };

  return (
    <div
      ref={containerRef}
      className={`relative mb-16 md:mb-24 ${
        align === 'center' ? 'text-center flex flex-col items-center' : 'text-left'
      } ${className}`}
    >
      <motion.div style={{ y: shouldReduceMotion ? 0 : y }}>
        {badge && (
          <Reveal direction="down" delay={0.05}>
            <span
              className={`inline-block px-3.5 py-1 text-xs font-display font-bold uppercase tracking-widest border-2 rounded-md shadow-[3px_3px_0_#101014] dark:shadow-[3px_3px_0_#000000] rotate-[-1.5deg] hover:rotate-0 transition-transform mb-4 ${badgeStyles[badgeColor]}`}
            >
              {badge}
            </span>
          </Reveal>
        )}

        <Reveal direction="up" delay={0.1}>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.05] text-[#101014] dark:text-[#F5F5FA]">
            {title}{' '}
            {highlight && (
              <span className="italic font-normal bg-gradient-to-r from-[#7C3AED] via-[#FF4D6D] to-[#FFB020] bg-clip-text text-transparent underline decoration-[#101014] dark:decoration-white/40 decoration-2">
                {highlight}
              </span>
            )}
          </h2>
        </Reveal>

        {subtitle && (
          <Reveal direction="up" delay={0.2}>
            <p className="mt-4 text-base md:text-xl text-[#101014]/70 dark:text-[#F5F5FA]/70 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </Reveal>
        )}
      </motion.div>
    </div>
  );
}
