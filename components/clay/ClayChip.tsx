'use client';

import React from 'react';

interface ClayChipProps {
  children: React.ReactNode;
  variant?: 'cream' | 'lavender' | 'pink' | 'mint' | 'sunny';
  className?: string;
}

const chipStyles = {
  cream: 'bg-[#FFF6E8] text-[#4B2E25]',
  lavender: 'bg-[#C2ABF7] text-[#4B2E25]',
  pink: 'bg-[#F8C5D2] text-[#4B2E25]',
  mint: 'bg-[#A9DDB0] text-[#4B2E25]',
  sunny: 'bg-[#F9D24A] text-[#4B2E25]',
};

export default function ClayChip({
  children,
  variant = 'cream',
  className = '',
}: ClayChipProps) {
  return (
    <span className={`clay-chip ${chipStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
