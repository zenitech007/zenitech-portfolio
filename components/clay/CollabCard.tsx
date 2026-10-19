'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import ClayCard from './ClayCard';
import ClayButton from './ClayButton';
import ClayPlaceholder from './ClayPlaceholder';

export default function CollabCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ClayCard
      variant="lavender"
      className="p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Decorative background glow */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-2xl pointer-events-none" />

      <div className="space-y-4 max-w-lg z-10">
        <span className="font-heading font-bold text-xs sm:text-sm px-3.5 py-1 rounded-full bg-[#FFF6E8]/80 text-[#4B2E25] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_4px_rgba(75,46,37,0.06)] inline-block">
          ✦ Collaboration
        </span>

        <h3 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#4B2E25] leading-[1.05] tracking-tight clay-emboss-brown">
          Let&apos;s Work Together
        </h3>

        <p className="text-base sm:text-lg text-[#4B2E25]/90 font-semibold leading-relaxed">
          Have an exciting project, a product to scale, or need high-impact engineering? Let&apos;s build something tactile, delightful, and remarkable.
        </p>

        <div className="pt-2">
          <ClayButton
            variant="cream"
            href="#contact"
            className="!px-7 !py-3.5 !text-base sm:!text-lg gap-2.5 font-bold shadow-md"
            ariaLabel="Contact Me"
          >
            <span>Contact Me</span>
            <div className="clay-arrow-btn w-8 h-8 ml-1">
              <ArrowRight className="w-4 h-4 text-[#4B2E25]" />
            </div>
          </ClayButton>
        </div>
      </div>

      {/* 3 Connected Clay Avatar Bubbles with dashed lines & pink heart */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-[#4B2E25]/15 z-10">
        <div className="flex items-center justify-between sm:justify-start sm:gap-6 relative">
          {/* Avatar 1 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <ClayPlaceholder
                name="avatar-1"
                alt="Client partner avatar"
                width={64}
                height={64}
              />
            </div>
            <span className="text-xs font-bold text-[#4B2E25] mt-1.5">Founder</span>
          </div>

          {/* Dashed connector line with animated heart */}
          <div className="flex-1 sm:max-w-[80px] flex items-center justify-center relative">
            <div className="w-full border-t-2 border-dashed border-[#4B2E25]/30" />
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.25, 1],
                      rotate: [0, 6, -6, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-6 h-6 rounded-full bg-[#F2508A] flex items-center justify-center shadow-[0_2px_6px_rgba(242,80,138,0.5),inset_0_1px_2px_rgba(255,255,255,0.8)]"
            >
              <Heart className="w-3.5 h-3.5 text-[#FFF6E8] fill-[#FFF6E8]" />
            </motion.div>
          </div>

          {/* Avatar 2 (Center) */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <ClayPlaceholder
                name="avatar-2"
                alt="Engineer avatar"
                width={64}
                height={64}
              />
            </div>
            <span className="text-xs font-bold text-[#4B2E25] mt-1.5">ZeniTech</span>
          </div>

          {/* Dashed connector line */}
          <div className="flex-1 sm:max-w-[80px] flex items-center justify-center relative">
            <div className="w-full border-t-2 border-dashed border-[#4B2E25]/30" />
            <div className="absolute w-2.5 h-2.5 rounded-full bg-[#F9D24A] shadow-[0_1px_3px_rgba(249,210,74,0.6)]" />
          </div>

          {/* Avatar 3 */}
          <div className="flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16">
              <ClayPlaceholder
                name="avatar-3"
                alt="Designer avatar"
                width={64}
                height={64}
              />
            </div>
            <span className="text-xs font-bold text-[#4B2E25] mt-1.5">Product</span>
          </div>
        </div>
      </div>
    </ClayCard>
  );
}
