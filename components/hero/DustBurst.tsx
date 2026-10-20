'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function DustBurst({ className = '' }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.2 : 1.2, ease: 'easeOut' }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* 1. Underlying Soft Blurred Violet Glow at 50% opacity */}
      <div
        className="absolute inset-0 rounded-full blur-[40px] opacity-50"
        style={{
          background: 'radial-gradient(circle, #8a6cf0 0%, #7050d8 45%, transparent 72%)',
        }}
      />

      {/* 2. Stippled Spray-Paint Dust Burst SVG */}
      <svg
        className="w-full h-full relative z-10"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Gradient for Burst */}
          <radialGradient
            id="dustRadial"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#8a6cf0" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#7050d8" stopOpacity="0.75" />
            <stop offset="72%" stopColor="#6844cf" stopOpacity="0" />
          </radialGradient>

          {/* SVG Filter for Stippled Particle Edge */}
          <filter id="dustStippleFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.045"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="38"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
          </filter>

          {/* Spray Pattern Mask for Outward Particle Scatter */}
          <mask id="sprayMask">
            <rect width="500" height="500" fill="white" />
            <circle cx="250" cy="250" r="190" fill="url(#dustRadial)" filter="url(#dustStippleFilter)" />
          </mask>
        </defs>

        {/* Main Displaced Stippled Circle */}
        <circle
          cx="250"
          cy="250"
          r="190"
          fill="url(#dustRadial)"
          filter="url(#dustStippleFilter)"
        />

        {/* Outward Scattered Spray Particle Specks (scattering toward top-right) */}
        <g fill="#b9a6ff" opacity="0.6">
          <circle cx="340" cy="140" r="2" />
          <circle cx="370" cy="110" r="1.5" />
          <circle cx="390" cy="130" r="2.5" />
          <circle cx="410" cy="95" r="1.8" />
          <circle cx="355" cy="90" r="1.2" />
          <circle cx="380" cy="70" r="2" />
          <circle cx="420" cy="140" r="1.5" />
          <circle cx="310" cy="120" r="2.2" />
          <circle cx="330" cy="80" r="1.7" />
          <circle cx="440" cy="120" r="1.3" />
          <circle cx="400" cy="160" r="2.1" />
          <circle cx="360" cy="170" r="1.4" />
          <circle cx="430" cy="180" r="1.8" />
          <circle cx="450" cy="150" r="1" />
          <circle cx="465" cy="110" r="1.5" />
          <circle cx="310" cy="70" r="1.6" />
          <circle cx="280" cy="85" r="2" />
        </g>
      </svg>
    </motion.div>
  );
}
