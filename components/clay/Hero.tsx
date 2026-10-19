'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Heart } from 'lucide-react';
import ClayPlaceholder from './ClayPlaceholder';
import CalendarWidget from './CalendarWidget';
import ClayButton from './ClayButton';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }
    const { innerWidth, innerHeight } = window;
    // Gentle mouse tilt
    const x = ((e.clientX - innerWidth / 2) / innerWidth) * 12;
    const y = ((e.clientY - innerHeight / 2) / innerHeight) * 12;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[100svh] overflow-hidden flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-16 lg:py-0 select-none"
    >
      {/* Ambient Blurred Clay Blobs Behind Everything */}
      <div className="absolute -left-28 top-[20%] w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-[#B49CF0]/25 blur-[100px] pointer-events-none -z-10 animate-clay-blob" />
      <div className="absolute -right-28 top-[25%] w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] rounded-full bg-[#F2508A]/20 blur-[100px] pointer-events-none -z-10 animate-clay-blob" />
      <div className="absolute left-[4%] bottom-[8%] w-[280px] sm:w-[360px] h-[160px] sm:h-[200px] rounded-full bg-[#FFF6E8]/75 blur-[80px] pointer-events-none -z-10 animate-clay-float" />

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column: Headline, Subtext, Real Clay Pill CTAs (~45% on desktop) */}
        <div className="w-full lg:w-[48%] space-y-6 sm:space-y-8 text-center lg:text-left z-20">
          {/* 3-Line Embossed Clay Headline */}
          <div className="space-y-1 sm:space-y-1.5">
            <h1 className="font-heading font-bold text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.98] tracking-tight clay-emboss-brown">
              Crafted
            </h1>
            <h1 className="font-heading font-bold text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.98] tracking-tight clay-emboss-brown">
              with
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <span className="font-heading font-bold text-[clamp(2.75rem,7.5vw,5.75rem)] leading-[0.98] tracking-tight text-[#F2508A] clay-emboss-pink">
                Care
              </span>

              {/* Floating Pink Clay Heart */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -8, 0],
                        rotate: [0, 8, -6, 0],
                        scale: [1, 1.08, 0.98, 1],
                      }
                }
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-b from-[#F86E9E] to-[#F2508A] flex items-center justify-center shadow-[0_10px_20px_rgba(242,80,138,0.4),inset_0_3px_6px_rgba(255,255,255,0.85)] cursor-pointer"
              >
                <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-[#FFF6E8] fill-[#FFF6E8]" />
              </motion.div>
            </div>
          </div>

          {/* 2-line Subtext */}
          <p className="text-lg sm:text-xl text-[#6B4A3E] max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
            Frontend Developer, UI/UX Designer, and AI integration specialist. Founder of{' '}
            <strong className="text-[#4B2E25] font-bold">ZeniTech</strong>, crafting soft, scalable SaaS platforms and delightful digital products.
          </p>

          {/* Real Clay Pill CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <ClayButton
              variant="lavender"
              href="#projects"
              hasArrow
              ariaLabel="View My Work"
            >
              View My Work
            </ClayButton>

            <ClayButton
              variant="cream"
              href="#contact"
              ariaLabel="Get in Touch"
            >
              Get in Touch
            </ClayButton>
          </div>
        </div>

        {/* Mobile-Only Character & Stack (<768px) */}
        <div className="w-full flex md:hidden flex-col items-center mt-12 z-20">
          {/* Small Calendar Widget above the hill on mobile */}
          <div className="mb-6">
            <CalendarWidget />
          </div>

          {/* Character standing with NO card wrapper */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -8, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-[80vw] max-w-[360px] aspect-square relative z-20 -mb-6"
          >
            <Image
              src="/hero-character.webp"
              alt="3D Clay Developer Character sitting at laptop waving"
              width={640}
              height={616}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_12px_24px_rgba(75,46,37,0.18)]"
            />
          </motion.div>

          {/* Mobile Full-width Lavender Hill */}
          <div
            className="w-full h-24 rounded-t-[50px] relative z-10 shadow-[0_-10px_24px_rgba(138,107,212,0.35),inset_0_3px_6px_rgba(255,255,255,0.7)]"
            style={{
              background: 'linear-gradient(180deg, #B9A3F2 0%, #9C80E0 100%)',
            }}
          />
        </div>
      </div>

      {/* Desktop Calendar Widget (Moved to top ~110px, right ~48px, behind character head z-15) */}
      <div className="hidden md:block absolute top-[110px] right-[48px] w-[280px] z-15">
        <CalendarWidget />
      </div>

      {/* Desktop Character Image: Stands directly on top of the hill with NO wrapper card */}
      <div
        className="hidden md:flex absolute bottom-[calc(34%-24px)] right-[24%] translate-x-1/2 z-20 flex-col items-center pointer-events-none"
        style={{ width: 'clamp(380px, 42vw, 640px)' }}
      >
        <motion.div
          animate={
            shouldReduceMotion
              ? { x: mouseOffset.x * 0.5, y: mouseOffset.y * 0.5 }
              : {
                  x: mouseOffset.x * 0.5,
                  y: [mouseOffset.y * 0.5, mouseOffset.y * 0.5 - 10, mouseOffset.y * 0.5],
                }
          }
          transition={{
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            x: { type: 'spring' as const, stiffness: 120, damping: 16 },
          }}
          className="relative w-full aspect-square pointer-events-auto select-none"
        >
          <Image
            src="/hero-character.webp"
            alt="3D Clay Developer Character sitting at laptop waving"
            width={640}
            height={616}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_16px_32px_rgba(75,46,37,0.22)]"
          />
        </motion.div>
      </div>

      {/* Separate Accessories Placed on the Hill to the Right of Laptop */}
      <div className="hidden md:block absolute bottom-[calc(34%-16px)] right-[6%] lg:right-[8%] z-25 w-20 h-24 lg:w-24 lg:h-30 pointer-events-none">
        <ClayPlaceholder
          name="plant"
          alt="Potted clay plant on desk"
          width={96}
          height={120}
        />
      </div>

      <div className="hidden md:block absolute bottom-[calc(34%-12px)] right-[14%] lg:right-[16%] z-25 w-14 h-14 lg:w-16 lg:h-16 pointer-events-none">
        <ClayPlaceholder
          name="coffee"
          alt="Steaming clay coffee mug"
          width={80}
          height={80}
        />
      </div>

      {/* Large Lavender Clay Hill/Desk Shape (Div, not an image, bleeding off right and bottom) */}
      <div
        className="hidden md:block absolute bottom-0 right-[-8%] w-[68%] h-[34%] pointer-events-none z-10"
        style={{
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
          background: 'linear-gradient(180deg, #B9A3F2 0%, #9C80E0 100%)',
          boxShadow:
            '0 -16px 36px -8px rgba(138, 107, 212, 0.45), inset 0 4px 8px rgba(255, 255, 255, 0.7), inset 0 -12px 24px rgba(75, 40, 140, 0.3)',
        }}
      >
        {/* Soft top highlight lip */}
        <div
          className="absolute top-0 left-0 right-0 h-3 bg-white/45 blur-[1px]"
          style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
        />
      </div>
    </section>
  );
}
