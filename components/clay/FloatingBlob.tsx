'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FloatingBlob() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Lavender Blob — Left Edge */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 20, -15, 0],
                y: [0, -30, 15, 0],
                scale: [1, 1.08, 0.95, 1],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] rounded-full bg-[#B49CF0]/25 blur-[100px] sm:blur-[140px] pointer-events-none"
      />

      {/* 2. Pink Blob — Right Edge */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, -25, 20, 0],
                y: [0, 35, -20, 0],
                scale: [1, 0.94, 1.06, 1],
              }
        }
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[25%] -right-[12%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-[#F2508A]/18 blur-[100px] sm:blur-[140px] pointer-events-none"
      />

      {/* 3. Cream / Warm Sunny Cloud — Bottom Left */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                x: [0, 30, -20, 0],
                y: [0, -25, 25, 0],
                scale: [1, 1.05, 0.95, 1],
              }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[68%] left-[5%] w-[45vw] h-[45vw] max-w-[580px] max-h-[580px] rounded-full bg-[#F9D24A]/15 blur-[120px] pointer-events-none"
      />
    </div>
  );
}
