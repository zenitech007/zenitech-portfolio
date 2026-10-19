'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView, animate, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(from);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;

    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration, shouldReduceMotion]);

  const displayValue = shouldReduceMotion ? to : value;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}
