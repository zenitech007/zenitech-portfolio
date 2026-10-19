'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function GradientBlobs() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 80]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -60]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* Violet blob - top left */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y1 }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#7C3AED]/15 dark:bg-[#7C3AED]/22 blur-[120px] animate-blob-1"
      />

      {/* Coral blob - top right */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y2 }}
        className="absolute top-[20%] -right-[15%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] rounded-full bg-[#FF4D6D]/15 dark:bg-[#FF4D6D]/20 blur-[130px] animate-blob-2"
      />

      {/* Amber/Sky blob - mid-bottom center */}
      <motion.div
        style={{ y: shouldReduceMotion ? 0 : y3 }}
        className="absolute top-[65%] left-[20%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-[#FFB020]/12 dark:bg-[#FFB020]/16 blur-[140px] animate-blob-3"
      />
    </div>
  );
}
