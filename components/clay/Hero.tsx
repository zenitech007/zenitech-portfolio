'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
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
    // Subtle tilt: max 6-8px
    const x = ((e.clientX - innerWidth / 2) / innerWidth) * 14;
    const y = ((e.clientY - innerHeight / 2) / innerHeight) * 14;
    setMouseOffset({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Headline, Subtext, CTA */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* 3-Line Embossed Clay Headline */}
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="font-heading font-bold text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.98] tracking-tight clay-emboss-brown">
              Crafted
            </h1>
            <h1 className="font-heading font-bold text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.98] tracking-tight clay-emboss-brown">
              with
            </h1>
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <h1 className="font-heading font-bold text-[clamp(2.75rem,7.5vw,6rem)] leading-[0.98] tracking-tight clay-emboss-pink">
                Care
              </h1>

              {/* Floating Pink Clay Heart */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -10, 0],
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

          {/* CTA: Big Lavender Pill + Round Cream Arrow Button */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <ClayButton
              variant="lavender"
              href="#projects"
              className="!px-8 !py-4 !text-lg sm:!text-xl gap-3 shadow-xl"
              ariaLabel="View My Work"
            >
              <span>View My Work</span>
              {/* Integrated Round Cream Arrow Button */}
              <div className="clay-arrow-btn w-9 h-9 sm:w-10 sm:h-10 ml-1">
                <ArrowRight className="w-5 h-5 text-[#4B2E25]" />
              </div>
            </ClayButton>

            <ClayButton
              variant="cream"
              href="#contact"
              className="!px-6 !py-4 !text-base sm:!text-lg font-bold"
              ariaLabel="Contact Olanrewaju"
            >
              <span>Get in Touch</span>
            </ClayButton>
          </div>
        </div>

        {/* Right Column: 3D Clay Scene + Calendar Widget */}
        <div className="lg:col-span-6 relative flex flex-col items-center">
          {/* Calendar Widget Positioned at Top */}
          <div className="w-full flex justify-center lg:justify-end mb-6 lg:mb-4 lg:-mr-4 z-20">
            <CalendarWidget />
          </div>

          {/* Interactive Parallax Scene Container */}
          <motion.div
            animate={{
              x: mouseOffset.x,
              y: mouseOffset.y,
            }}
            transition={{ type: 'spring' as const, stiffness: 120, damping: 16 }}
            className="relative w-full max-w-[480px] sm:max-w-[540px] flex items-end justify-center"
          >
            {/* Big Lavender Clay Desk / Hill that Bleeds */}
            <div className="clay clay-lavender w-full rounded-t-[50px] sm:rounded-t-[70px] pt-10 pb-6 px-6 relative flex flex-col items-center justify-end overflow-hidden shadow-2xl">
              {/* Top Desk Lip Highlight */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-white/40 rounded-t-[50px] blur-[1px]" />

              {/* Main Waving Character at Laptop */}
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-64 h-64 sm:w-80 sm:h-80 relative z-10"
              >
                <ClayPlaceholder
                  name="hero-character"
                  alt="3D Clay Developer Character sitting at laptop waving"
                  width={340}
                  height={340}
                  priority
                />
              </motion.div>

              {/* Accessories on the desk */}
              <div className="absolute bottom-3 left-4 sm:left-8 z-20">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -6, 0],
                          rotate: [0, 2, 0],
                        }
                  }
                  transition={{
                    duration: 4.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.6,
                  }}
                  className="w-16 h-20 sm:w-20 sm:h-24"
                >
                  <ClayPlaceholder
                    name="plant"
                    alt="Potted clay plant on desk"
                    width={90}
                    height={110}
                  />
                </motion.div>
              </div>

              <div className="absolute bottom-4 right-4 sm:right-8 z-20">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [0, -5, 0],
                          rotate: [0, -3, 0],
                        }
                  }
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.2,
                  }}
                  className="w-14 h-14 sm:w-18 sm:h-18"
                >
                  <ClayPlaceholder
                    name="coffee"
                    alt="Steaming clay coffee mug"
                    width={80}
                    height={80}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
