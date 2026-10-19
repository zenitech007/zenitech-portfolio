'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Clock, Globe2, Sparkles } from 'lucide-react';
import ClayCard from './ClayCard';
import ClayPlaceholder from './ClayPlaceholder';

export default function StatusCard() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ClayCard
      variant="mint"
      className="p-8 sm:p-10 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Decorative inner glow */}
      <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-white/30 blur-2xl pointer-events-none" />

      <div>
        {/* Live Status Badge with Green Check */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF6E8] text-[#4B2E25] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_4px_8px_rgba(124,197,137,0.35)] mb-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CC589] opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#52A662]" />
          </span>
          <span className="font-heading font-bold text-xs uppercase tracking-wider">
            Available Now
          </span>
          <CheckCircle2 className="w-4 h-4 text-[#52A662]" />
        </div>

        {/* Headline */}
        <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-[#4B2E25] leading-tight tracking-tight mb-3">
          Open to Opportunities
        </h3>

        <p className="text-sm sm:text-base text-[#4B2E25]/90 font-semibold leading-relaxed mb-6">
          Currently accepting selective full-time senior frontend roles, high-impact contract builds, and AI product advisory.
        </p>

        {/* Quick Highlights Grid */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4B2E25] bg-[#FFF6E8]/70 px-3.5 py-2 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
            <Clock className="w-4 h-4 text-[#4B2E25]/70" />
            <span>Response Time: Within 24 hours</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#4B2E25] bg-[#FFF6E8]/70 px-3.5 py-2 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
            <Globe2 className="w-4 h-4 text-[#4B2E25]/70" />
            <span>Timezones: Remote Worldwide / UTC to EST</span>
          </div>
        </div>
      </div>

      {/* Smiling Clay Cloud Mascot */}
      <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#4B2E25]/10">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#4B2E25]">
          <Sparkles className="w-3.5 h-3.5 text-[#F2508A]" />
          <span>Ready to build something great</span>
        </div>

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -6, 0],
                  rotate: [0, 2, -2, 0],
                }
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-20 h-16 sm:w-24 sm:h-20"
        >
          <ClayPlaceholder
            name="cloud-mascot"
            alt="Smiling clay cloud mascot"
            width={96}
            height={80}
          />
        </motion.div>
      </div>
    </ClayCard>
  );
}
