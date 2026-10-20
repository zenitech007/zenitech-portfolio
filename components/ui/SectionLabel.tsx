import React from 'react';

interface SectionLabelProps {
  accentText?: string;
  whiteText?: string;
  hasSparkle?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function SectionLabel({
  accentText,
  whiteText,
  hasSparkle = false,
  className = '',
  size = 'md',
}: SectionLabelProps) {
  const sizeClasses = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl',
    lg: 'text-3xl sm:text-4xl lg:text-5xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <h2 className={`font-display uppercase tracking-tight ${sizeClasses[size]}`}>
        {accentText && <span className="text-[#A78BFA]">{accentText} </span>}
        {whiteText && <span className="text-white">{whiteText}</span>}
      </h2>
      {hasSparkle && (
        <span className="text-[#A78BFA] animate-twinkle text-sm shrink-0" aria-hidden="true">
          ✦
        </span>
      )}
    </div>
  );
}
