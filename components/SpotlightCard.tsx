'use client';

import React, { useState, useRef, useSyncExternalStore } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
}

function subscribeToFinePointer(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getFinePointerSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

export default function SpotlightCard({
  children,
  className = '',
  enableTilt = true,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const canHover = useSyncExternalStore(
    subscribeToFinePointer,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot
  );
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });

    if (enableTilt && canHover && !shouldReduceMotion) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Max tilt of ~4 degrees for subtle luxury feel
      const rotateX = -((y - centerY) / centerY) * 4;
      const rotateY = ((x - centerX) / centerX) * 4;
      setTilt({ rotateX, rotateY });
    }
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 20,
        mass: 0.2,
      }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className={`group relative rounded-2xl border-2 border-[#101014] bg-[#FFFBF5] shadow-[6px_6px_0_#101014] transition-all duration-300 hover:shadow-[10px_10px_0_#101014] dark:bg-[#15151E] dark:border-white/15 dark:shadow-[6px_6px_0_#000000] dark:hover:shadow-[10px_10px_0_#7C3AED]/35 overflow-hidden ${className}`}
    >
      {/* Bright Spotlight Effect */}
      {canHover && !shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.16), rgba(255, 77, 109, 0.1), transparent 80%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}