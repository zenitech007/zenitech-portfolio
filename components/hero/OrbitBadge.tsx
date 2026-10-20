'use client';

import React from 'react';

export default function OrbitBadge({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative rounded-full bg-[#0c0915] border border-[#7b5ce0]/60 shadow-[0_8px_32px_rgba(8,7,13,0.9)] flex items-center justify-center select-none overflow-hidden ${className}`}
      aria-label="Creative Developer Monogram Badge"
    >
      {/* 1. Rotating SVG TextPath Ring */}
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full animate-spin-badge absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <path
            id="badgeCirclePath"
            d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
          />
        </defs>
        <text
          fill="rgba(244, 244, 246, 0.92)"
          fontFamily="var(--font-space-grotesk), 'Space Grotesk', sans-serif"
          fontWeight="600"
          fontSize="11.5px"
          letterSpacing="0.22em"
          textAnchor="start"
        >
          <textPath href="#badgeCirclePath" startOffset="0%">
            CREATIVE DEVELOPER • CODE • DESIGN • DEPLOY •
          </textPath>
        </text>
      </svg>

      {/* 2. Center Monogram: CD in Anton, violet-400 */}
      <div
        className="relative z-10 flex items-center justify-center font-display uppercase text-[#9a80f0] tracking-wider leading-none select-none"
        style={{
          fontSize: 'clamp(18px, 3.2cqw, 48px)',
        }}
      >
        CD
      </div>
    </div>
  );
}
