'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function OrbitLine({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  // 4-point sparkle formula: M0 -r Q0 0 r 0 Q0 0 0 r Q0 0 -r 0 Q0 0 0 -r Z
  const sparkleD = (r: number) =>
    `M0 ${-r} Q0 0 ${r} 0 Q0 0 0 ${r} Q0 0 ${-r} 0 Q0 0 0 ${-r} Z`;

  return (
    <svg
      viewBox="0 0 736 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Gradient that fades out toward the bottom-left tail (x: 455, y: 346) */}
        <linearGradient
          id="orbitFadeGradient"
          x1="620"
          y1="85"
          x2="455"
          y2="346"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#b9a6ff" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#b9a6ff" stopOpacity="0.75" />
          <stop offset="90%" stopColor="#b9a6ff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#b9a6ff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* 1. Orbit Arc Path */}
      <motion.path
        d="M600 85 C690 100 715 170 662 228 C620 280 540 330 455 346"
        stroke="url(#orbitFadeGradient)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.2 : 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* 2. Large 4-point sparkle at (688, 190), radius ~9 */}
      <g transform="translate(688, 190)">
      <motion.g
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                scale: [1, 1.25, 0.95, 1],
                opacity: [0.85, 1, 0.7, 0.85],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        <path d={sparkleD(9)} fill="#b9a6ff" />
      </motion.g>
      </g>

      {/* 3. Small 4-point sparkle at (662, 227), radius ~5 */}
      <g transform="translate(662, 227)">
      <motion.g
        animate={
          shouldReduceMotion
            ? { opacity: 1 }
            : {
                scale: [0.95, 1.3, 1, 0.95],
                opacity: [0.7, 1, 0.85, 0.7],
              }
        }
        transition={{
          repeat: Infinity,
          duration: 2.6,
          delay: 0.8,
          ease: 'easeInOut',
        }}
      >
        <path d={sparkleD(5)} fill="#b9a6ff" />
      </motion.g>
      </g>
    </svg>
  );
}
