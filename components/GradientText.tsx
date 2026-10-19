'use client';

import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span
      className={`inline-block bg-gradient-to-r from-[#7C3AED] via-[#FF4D6D] to-[#FFB020] bg-clip-text text-transparent bg-[length:200%_auto] animate-spin-gradient ${className}`}
    >
      {children}
    </span>
  );
}
