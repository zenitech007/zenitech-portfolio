import React from 'react';

interface SparkleProps {
  radius?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 4-point curved sparkle diamond.
 * Path formula for radius r: M0 -r Q0 0 r 0 Q0 0 0 r Q0 0 -r 0 Q0 0 0 -r Z
 */
export default function Sparkle({
  radius = 8,
  color = '#b9a6ff',
  className = '',
  style = {},
}: SparkleProps) {
  const d = `M0 ${-radius} Q0 0 ${radius} 0 Q0 0 0 ${radius} Q0 0 ${-radius} 0 Q0 0 0 ${-radius} Z`;
  const size = radius * 2.5;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`${-radius * 1.25} ${-radius * 1.25} ${size} ${size}`}
      className={`inline-block shrink-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path d={d} fill={color} />
    </svg>
  );
}
