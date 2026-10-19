'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Star } from 'lucide-react';
import ClayCard from './ClayCard';
import ClayPlaceholder from './ClayPlaceholder';

export default function Testimonial() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 my-12 sm:my-20">
      <div className="relative">
        {/* Peeking Clay Unicorn / Rainbow over top-right corner */}
        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -8, 0],
                  rotate: [0, 3, -2, 0],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-14 sm:-top-18 right-6 sm:right-12 z-20 w-24 h-24 sm:w-32 sm:h-32 pointer-events-none select-none"
        >
          <ClayPlaceholder
            name="unicorn-rainbow"
            alt="Peeking clay unicorn with rainbow arch"
            width={128}
            height={128}
          />
        </motion.div>

        {/* Soft Pink Clay Card */}
        <ClayCard
          variant="pink-soft"
          className="p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Subtle clay background sheen */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />

          {/* Big Clay Quotation Mark */}
          <div className="mb-4 sm:mb-6">
            <span className="font-heading font-black text-6xl sm:text-8xl text-[#F2508A] leading-none select-none drop-shadow-[0_4px_8px_rgba(242,80,138,0.35)]">
              “
            </span>
          </div>

          {/* Testimonial Quote */}
          <blockquote className="font-heading font-bold text-xl sm:text-2xl md:text-3xl text-[#4B2E25] leading-snug sm:leading-relaxed tracking-tight max-w-3xl mb-8">
            Olanrewaju combines deep architectural frontend rigor with an extraordinary eye for tactile, joyful design. His work turned our product into an experience users actually love using every day.
          </blockquote>

          {/* Author Details & Clay Star Badges */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#4B2E25]/15">
            <div>
              <p className="font-heading font-bold text-lg text-[#4B2E25]">
                Engineering & Product Leadership
              </p>
              <p className="text-sm font-semibold text-[#6B4A3E]">
                Client & Collaborative Partner Feedback
              </p>
            </div>

            {/* 5-Star Clay Rating */}
            <div className="flex items-center gap-1.5 bg-[#FFF6E8]/70 px-4 py-2 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(75,46,37,0.06)]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-[#F9D24A] fill-[#F9D24A] drop-shadow-[0_1px_2px_rgba(249,210,74,0.4)]"
                />
              ))}
              <span className="text-xs font-bold text-[#4B2E25] ml-1">5.0 Quality</span>
            </div>
          </div>
        </ClayCard>
      </div>
    </section>
  );
}
