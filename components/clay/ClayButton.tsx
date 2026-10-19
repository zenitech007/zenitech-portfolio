'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export type ClayButtonVariant = 'lavender' | 'cream' | 'pink' | 'mint';

interface ClayButtonProps {
  children: React.ReactNode;
  variant?: ClayButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  hasArrow?: boolean;
  arrowIcon?: React.ReactNode;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function ClayButton({
  children,
  variant = 'lavender',
  href,
  onClick,
  className = '',
  hasArrow = false,
  arrowIcon,
  target,
  rel,
  ariaLabel,
  type = 'button',
}: ClayButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  // Variant styling configurations
  const variantConfig: Record<
    ClayButtonVariant,
    {
      bg: string;
      text: string;
      textShadow: string;
      shadow: string;
      arrowBg: string;
      arrowShadow: string;
      arrowIconColor: string;
    }
  > = {
    lavender: {
      bg: 'bg-gradient-to-b from-[#C4B0F5] via-[#9F84E3] to-[#8A6BD4]',
      text: 'text-white',
      textShadow: '[text-shadow:0_2px_0_rgba(70,40,130,0.35)]',
      shadow:
        'shadow-[0_18px_30px_-8px_rgba(138,107,212,0.55),0_6px_12px_-2px_rgba(138,107,212,0.35),inset_0_3px_6px_rgba(255,255,255,0.65),inset_0_-6px_12px_rgba(80,50,150,0.35)]',
      arrowBg: 'bg-gradient-to-b from-[#FFF9EE] to-[#F2E4CF]',
      arrowShadow:
        'shadow-[0_4px_8px_rgba(70,40,130,0.3),inset_0_2px_3px_#ffffff,inset_0_-3px_6px_rgba(0,0,0,0.08)]',
      arrowIconColor: 'text-[#8A6BD4]',
    },
    cream: {
      bg: 'bg-gradient-to-b from-[#FFFFFF] via-[#FFF3E2] to-[#F7E5CF]',
      text: 'text-[#4B2E25]',
      textShadow: '[text-shadow:0_1px_0_rgba(255,255,255,0.85)]',
      shadow:
        'shadow-[0_18px_30px_-8px_rgba(180,140,110,0.35),0_6px_12px_-2px_rgba(180,140,110,0.2),inset_0_3px_6px_rgba(255,255,255,0.95),inset_0_-6px_12px_rgba(75,46,37,0.12)]',
      arrowBg: 'bg-gradient-to-b from-[#C4B0F5] to-[#8A6BD4]',
      arrowShadow:
        'shadow-[0_4px_8px_rgba(138,107,212,0.35),inset_0_2px_3px_rgba(255,255,255,0.7),inset_0_-3px_6px_rgba(75,40,140,0.2)]',
      arrowIconColor: 'text-[#FFF6E8]',
    },
    pink: {
      bg: 'bg-gradient-to-b from-[#F86E9E] via-[#F55F95] to-[#F2508A]',
      text: 'text-[#FFF6E8]',
      textShadow: '[text-shadow:0_2px_0_rgba(170,20,75,0.35)]',
      shadow:
        'shadow-[0_18px_30px_-8px_rgba(242,80,138,0.5),0_6px_12px_-2px_rgba(242,80,138,0.3),inset_0_3px_6px_rgba(255,255,255,0.85),inset_0_-5px_10px_rgba(170,20,75,0.25)]',
      arrowBg: 'bg-gradient-to-b from-[#FFF9EE] to-[#F2E4CF]',
      arrowShadow:
        'shadow-[0_4px_8px_rgba(170,20,75,0.3),inset_0_2px_3px_#ffffff,inset_0_-3px_6px_rgba(0,0,0,0.08)]',
      arrowIconColor: 'text-[#F2508A]',
    },
    mint: {
      bg: 'bg-gradient-to-b from-[#B8E7BE] via-[#A9DDB0] to-[#7CC589]',
      text: 'text-[#4B2E25]',
      textShadow: '[text-shadow:0_1px_0_rgba(255,255,255,0.8)]',
      shadow:
        'shadow-[0_18px_30px_-8px_rgba(124,197,137,0.45),0_6px_12px_-2px_rgba(124,197,137,0.25),inset_0_3px_6px_rgba(255,255,255,0.85),inset_0_-5px_10px_rgba(50,130,70,0.2)]',
      arrowBg: 'bg-gradient-to-b from-[#FFF9EE] to-[#F2E4CF]',
      arrowShadow:
        'shadow-[0_4px_8px_rgba(124,197,137,0.3),inset_0_2px_3px_#ffffff,inset_0_-3px_6px_rgba(0,0,0,0.08)]',
      arrowIconColor: 'text-[#4B2E25]',
    },
  };

  const currentVariant = variantConfig[variant] || variantConfig.lavender;

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: {
          y: -3,
          scale: 1.03,
          transition: { type: 'spring' as const, stiffness: 400, damping: 15 },
        },
        whileTap: {
          y: 2,
          scale: 0.97,
          transition: { type: 'spring' as const, stiffness: 500, damping: 12 },
        },
      };

  const paddingClass = hasArrow
    ? 'py-[10px] sm:py-[14px] pl-[24px] sm:pl-[32px] pr-[10px] sm:pr-[14px]'
    : 'py-[12px] sm:py-[16px] px-[26px] sm:px-[32px]';

  const baseClasses = `group inline-flex items-center gap-[14px] whitespace-nowrap rounded-full font-heading font-semibold text-[18px] sm:text-[20px] select-none cursor-pointer tracking-tight transition-[filter,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#8A6BD4] focus-visible:ring-offset-[3px] focus-visible:ring-offset-[#FCEFDD] active:shadow-[0_6px_14px_-2px_rgba(138,107,212,0.4),inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-8px_16px_rgba(75,40,140,0.4)] ${currentVariant.bg} ${currentVariant.text} ${currentVariant.textShadow} ${currentVariant.shadow} ${paddingClass} ${className}`;

  const renderContent = () => (
    <>
      <span>{children}</span>
      {hasArrow && (
        <div
          className={`w-[40px] h-[40px] sm:w-[44px] sm:h-[44px] min-w-[40px] sm:min-w-[44px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1 ${currentVariant.arrowBg} ${currentVariant.arrowShadow}`}
        >
          {arrowIcon || (
            <ArrowRight className={`w-5 h-5 ${currentVariant.arrowIconColor}`} />
          )}
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}
        className={baseClasses}
      >
        {renderContent()}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}
      className={baseClasses}
    >
      {renderContent()}
    </motion.button>
  );
}
