'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import OrbitLine from './hero/OrbitLine';
import OrbitBadge from './hero/OrbitBadge';
import DustBurst from './hero/DustBurst';
import NoiseOverlay from './hero/NoiseOverlay';

// The portrait PNG is cropped at the shoulders, so its left/right/bottom edges are hard cuts.
// Fade all three so the dark sweater dissolves into the background (like the template).
const PORTRAIT_SIDE_FADE =
  'linear-gradient(to right, transparent 0%, #000 16%, #000 84%, transparent 100%)';
const PORTRAIT_BOTTOM_FADE =
  'linear-gradient(to bottom, #000 0%, #000 56%, transparent 100%)';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants honoring prefers-reduced-motion
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        delay: shouldReduceMotion ? 0 : custom * 0.06,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const stats = [
    { value: '4+', label: 'YEARS EXPERIENCE' },
    { value: '40+', label: 'PROJECTS DELIVERED' },
    { value: '25+', label: 'HAPPY CLIENTS' },
    { value: '10+', label: 'TECHNOLOGIES' },
  ];

  return (
    <section
      id="home"
      aria-label="Creative Developer Hero Section"
      className="relative w-full min-h-screen bg-[#08070d] hero-atmosphere flex items-center justify-center overflow-hidden"
    >
      {/* ── Film-Grain Noise Overlay (feTurbulence) ── */}
      <NoiseOverlay />

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP: PIXEL-PERFECT COMPOSITION FRAME (>= 768px)
          Aspect ratio 3/2, max 1440px, container-type: inline-size
          All coordinates positioned in % of frame, all fonts in cqw
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:block w-full max-w-[1440px] h-full">
        <div
          className="relative w-full aspect-[3/2] select-none"
          style={{ containerType: 'inline-size' }}
        >
          {/* ── 6. Dust Burst Behind Portrait (center: 73.5%, 35%) ── */}
          <div
            className="absolute z-10"
            style={{
              left: '73.5%',
              top: '35%',
            }}
          >
            <div
              style={{
                width: '35cqw',
                height: '35cqw',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <DustBurst className="w-full h-full" />
            </div>
          </div>

          {/* ── 5. Portrait Cutout ──
              Aligned to the headline rows: hair-top = top of CREATIVE (7.2cqw),
              chin = bottom of CREATIVE, neck/shoulders sit in the DEVELOPER row.
              Box uses the PNG's own aspect ratio (524x693) so nothing is letterboxed.
              The image ends well above the divider, so the stats row sits on clean black. */}
          <motion.div
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 1.2,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute z-15 pointer-events-none select-none"
            style={{
              left: '58.3%',
              top: '7.2cqw',
              width: '25.5cqw',
              aspectRatio: '524 / 693',
            }}
          >
            {/* drop-shadow sits OUTSIDE the masks, otherwise the mask clips the glow flat at the box edge */}
            <div
              className="relative w-full h-full"
              style={{ filter: 'drop-shadow(0 0 40px rgba(123,92,224,0.35))' }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: PORTRAIT_SIDE_FADE,
                  WebkitMaskImage: PORTRAIT_SIDE_FADE,
                }}
              >
                <div
                  className="relative w-full h-full"
                  style={{
                    maskImage: PORTRAIT_BOTTOM_FADE,
                    WebkitMaskImage: PORTRAIT_BOTTOM_FADE,
                  }}
                >
                  <Image
                    src="/hero-portrait.png"
                    alt="Creative Developer Portrait Cutout"
                    fill
                    priority
                    sizes="(min-width: 768px) 26vw, 90vw"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 7. Orbit Line and Sparkles Overlay (covers frame, above portrait) ── */}
          <div className="absolute inset-0 z-25 pointer-events-none">
            <OrbitLine className="w-full h-full" />
          </div>

          {/* ── 3. Headline (left x 4%, top y 12%), z-index ABOVE portrait ── */}
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              left: '4%',
              top: '12%',
              width: '58%',
            }}
          >
            <h1
              aria-label="Creative Developer Portfolio"
              className="relative flex flex-col font-display font-normal uppercase select-none"
            >
              {/* Line 1: CREATIVE — Taller than DEVELOPER (~1.7x), gradient fill */}
              <motion.div
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                style={{
                  height: '21.1cqw',
                }}
              >
                <span
                  className="creative-gradient-text block"
                  style={{
                    fontSize: '14.5cqw',
                    lineHeight: 0.82,
                    letterSpacing: '-0.01em',
                    transform: 'scale(0.96, 1.7)',
                    transformOrigin: 'top left',
                  }}
                >
                  CREATIVE
                </span>
              </motion.div>

              {/* Line 2: DEVELOPER — Solid #f4f4f6, touches bottom of CREATIVE */}
              <motion.div
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="relative"
              >
                <span
                  className="block text-[#f4f4f6]"
                  style={{
                    fontSize: '14.5cqw',
                    lineHeight: 0.82,
                    letterSpacing: '-0.01em',
                  }}
                >
                  DEVELOPER
                </span>
              </motion.div>
            </h1>
          </div>

          {/* Overlapping "Portfolio" Script Word:
              Solid violet-400, left edge at x 29%, top at y 60%, overlapping bottom edge of DEVELOPER under V-E-L */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="absolute z-35 pointer-events-none select-none"
            style={{
              left: '29%',
              top: '60%',
            }}
          >
            <div
              style={{
                transform: 'rotate(-6deg)',
                transformOrigin: 'left center',
              }}
            >
              <span
                className="portfolio-script block text-[#9a80f0] whitespace-nowrap leading-none"
                style={{
                  fontSize: 'clamp(38px, 8.5cqw, 126px)',
                }}
                aria-hidden="true"
              >
                Portfolio
              </span>
            </div>
          </motion.div>

          {/* ── 4. Left Text Block (x 4%) ── */}
          <div
            className="absolute z-30"
            style={{
              left: '4%',
              top: '74%',
            }}
          >
            {/* Tagline (top y 74%): 3 lines, white, Space Grotesk 500, line-height 1.5 */}
            <motion.p
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-sans font-medium uppercase text-[#f4f4f6]"
              style={{
                fontSize: 'clamp(10px, 1.4cqw, 20px)',
                lineHeight: 1.5,
                letterSpacing: '0.12em',
              }}
            >
              I DESIGN &amp; CODE<br />
              DIGITAL EXPERIENCES<br />
              THAT INSPIRE.
            </motion.p>

            {/* Code line (top y 87%): JetBrains Mono 500, violet-300 */}
            <motion.p
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-mono font-medium text-[#b9a6ff]"
              style={{
                marginTop: '1.2cqw',
                fontSize: 'clamp(9px, 1cqw, 15px)',
                letterSpacing: '0.06em',
              }}
            >
              &lt;/ CODE, DESIGN, DEPLOY /&gt;
            </motion.p>
          </div>

          {/* ── 8. "AVAILABLE FOR PROJECTS" (x 68%, y 74.5%) ── */}
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="absolute flex items-center z-30"
            style={{
              left: '68%',
              top: '74.5%',
            }}
          >
            {/* 8px violet-500 dot with glowing pulse */}
            <span
              className="inline-block rounded-full bg-[#7b5ce0] animate-pulse-glow shrink-0"
              style={{
                width: '8px',
                height: '8px',
              }}
              aria-hidden="true"
            />
            {/* Two-line text */}
            <div
              className="font-sans font-medium uppercase text-[#f4f4f6]"
              style={{
                marginLeft: '8px',
                fontSize: 'clamp(9px, 1.2cqw, 17px)',
                letterSpacing: '0.12em',
                lineHeight: 1.25,
              }}
            >
              <div>AVAILABLE</div>
              <div>FOR PROJECTS</div>
            </div>
          </motion.div>

          {/* ── 9. Circular Badge (center: 92%, 75.5%, diameter ~11.5%) ── */}
          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="absolute z-30"
            style={{
              left: '92%',
              top: '75.5%',
            }}
          >
            <div
              style={{
                width: '11.5cqw',
                height: '11.5cqw',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <OrbitBadge className="w-full h-full" />
            </div>
          </motion.div>

          {/* ── 10. Divider Line (x 26% to x 84% at y 85.5%) ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.8,
              delay: 0.4,
              ease: 'easeOut',
            }}
            className="absolute z-20 origin-left"
            style={{
              left: '26%',
              width: '58%',
              top: '85.5%',
              height: '1px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            }}
          />

          {/* ── 11. Stats Row (y 89.5%) — same left/width as the divider, evenly distributed ── */}
          <div
            className="absolute z-30 flex items-start justify-between"
            style={{
              left: '26%',
              width: '58%',
              top: '89.5%',
            }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                custom={6 + idx}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
              >
                <span
                  className="font-sans font-bold text-[#9a80f0] leading-none"
                  style={{
                    fontSize: 'clamp(16px, 2.3cqw, 33px)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="font-sans font-medium uppercase text-[#a8a5b8] whitespace-nowrap"
                  style={{
                    marginTop: '4px',
                    fontSize: 'clamp(8px, 1cqw, 14.5px)',
                    letterSpacing: '0.12em',
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          MOBILE: BEAUTIFULLY STACKED RESPONSIVE LAYOUT (< 768px)
          headline -> portrait -> tagline -> badge -> stats grid
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="block md:hidden w-full px-5 pt-24 pb-8 z-20 relative max-w-md mx-auto select-none">
        {/* Mobile Headline */}
        <div className="relative mb-8">
          <h1
            aria-label="Creative Developer Portfolio"
            className="flex flex-col font-display uppercase tracking-tight select-none"
          >
            <span
              className="creative-gradient-text block text-[4.4rem] leading-[0.8] origin-top-left"
              style={{
                transform: 'scale(0.96, 1.45)',
                marginBottom: '1.8rem',
              }}
            >
              CREATIVE
            </span>
            <span className="text-[#f4f4f6] block text-[4rem] leading-[0.82]">
              DEVELOPER
            </span>
          </h1>

          {/* Script Word: Portfolio */}
          <div
            className="absolute -bottom-6 left-12 z-30"
            style={{ transform: 'rotate(-6deg)' }}
          >
            <span className="portfolio-script text-4xl text-[#9a80f0] block leading-none">
              Portfolio
            </span>
          </div>
        </div>

        {/* Mobile Portrait with Dust Burst */}
        <div className="relative w-full aspect-[4/5] max-w-[280px] mx-auto my-8">
          {/* Dust Burst behind */}
          <div className="absolute inset-0 scale-125 -z-10 flex items-center justify-center">
            <DustBurst className="w-full h-full" />
          </div>

          {/* Cutout Portrait */}
          <div
            className="relative w-full h-full"
            style={{ filter: 'drop-shadow(0 0 30px rgba(123,92,224,0.35))' }}
          >
            <div
              className="relative w-full h-full"
              style={{
                maskImage: PORTRAIT_SIDE_FADE,
                WebkitMaskImage: PORTRAIT_SIDE_FADE,
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  maskImage: PORTRAIT_BOTTOM_FADE,
                  WebkitMaskImage: PORTRAIT_BOTTOM_FADE,
                }}
              >
                <Image
                  src="/hero-portrait.png"
                  alt="Creative Developer Portrait Cutout"
                  fill
                  priority
                  sizes="280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* Circular Badge pinned on Mobile */}
          <div className="absolute -bottom-3 -right-2 w-20 h-20 z-30">
            <OrbitBadge className="w-full h-full" />
          </div>
        </div>

        {/* Mobile Tagline & Code */}
        <div className="space-y-3 mb-8 text-center sm:text-left">
          <p className="font-sans font-medium uppercase text-sm tracking-wider text-[#f4f4f6] leading-relaxed">
            I DESIGN &amp; CODE<br />
            DIGITAL EXPERIENCES<br />
            THAT INSPIRE.
          </p>
          <p className="font-mono text-xs text-[#b9a6ff] tracking-wide">
            &lt;/ CODE, DESIGN, DEPLOY /&gt;
          </p>
        </div>

        {/* Mobile "AVAILABLE FOR PROJECTS" Dot Label */}
        <div className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-full bg-[#120d22]/70 border border-[#7b5ce0]/30 w-fit mx-auto mb-8">
          <span className="w-2 h-2 rounded-full bg-[#7b5ce0] animate-pulse-glow" />
          <span className="font-sans font-medium uppercase text-xs tracking-wider text-[#f4f4f6]">
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Mobile Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Mobile 2x2 Stats Grid */}
        <div className="grid grid-cols-2 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-sans font-bold text-2xl text-[#9a80f0]">
                {stat.value}
              </span>
              <span className="font-sans font-medium uppercase text-[10px] text-[#a8a5b8] tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
