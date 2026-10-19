import React from 'react';

interface MarqueeProps {
  items?: string[];
  className?: string;
  speed?: string;
}

const DEFAULT_ITEMS = [
  'REACT',
  'TYPESCRIPT',
  'NEXT.JS 16',
  'FASTAPI',
  'UI/UX DESIGN',
  'AI INTEGRATION',
  'TAILWIND CSS',
  'FRAMER MOTION',
  'FULL-STACK ARCHITECTURE',
];

export default function Marquee({
  items = DEFAULT_ITEMS,
  className = '',
}: MarqueeProps) {
  return (
    <div
      className={`relative w-full overflow-hidden border-y-2 border-[#101014] bg-gradient-to-r from-[#FFB020] via-[#FF4D6D] to-[#7C3AED] py-3.5 select-none ${className}`}
    >
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Render 2 sets for infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-8 font-display text-sm md:text-base font-extrabold uppercase tracking-wider text-[#101014]"
          >
            <span>{item}</span>
            <span className="text-[#FFFBF5] text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
