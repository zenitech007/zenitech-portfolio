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

  // Name lockup used by BOTH layouts. Everything is sized in cqw of its own wrapper
  // (wrapper width = 100cqw), so it fills any column width without breakpoints.
  // Anton widths: OLANREWAJU = 4.78em, SORUNKE = 3.21em.
  const nameLockup = (
    <div className="relative w-full" style={{ containerType: 'inline-size' }}>
      <div className="relative" style={{ height: '63cqw' }}>
        <h1
          aria-label="Olanrewaju Sorunke, ZeniTech"
          className="font-display font-normal uppercase select-none"
        >
          {/* Line 1: tall, condensed, gradient */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
            style={{ height: '33.8cqw' }}
          >
            <span
              className="creative-gradient-text block"
              style={{
                fontSize: '20.6cqw',
                lineHeight: 0.82,
                letterSpacing: '-0.01em',
                transform: 'scale(1, 1.9)',
                transformOrigin: 'top left',
                whiteSpace: 'nowrap',
              }}
            >
              OLANREWAJU
            </span>
          </motion.div>

          {/* Line 2: solid white, touches line 1 */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            aria-hidden="true"
            style={{ marginTop: '0.4cqw' }}
          >
            <span
              className="block text-[#f4f4f6]"
              style={{
                fontSize: '24cqw',
                lineHeight: 0.82,
                letterSpacing: '-0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              SORUNKE
            </span>
          </motion.div>
        </h1>

        {/* Script word overlapping the bottom edge of SORUNKE */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="pointer-events-none absolute select-none"
          style={{ left: '57cqw', top: '49.5cqw' }}
          aria-hidden="true"
        >
          <div style={{ transform: 'rotate(-6deg)', transformOrigin: 'left center' }}>
            <span
              className="portfolio-script block whitespace-nowrap leading-none text-[#9a80f0]"
              style={{ fontSize: '14cqw' }}
            >
              ZeniTech
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative w-full bg-[#08070d] hero-atmosphere overflow-hidden lg:flex lg:justify-center"
    >
      {/* ── Film-Grain Noise Overlay (feTurbulence) ── */}
      <NoiseOverlay />

      {/* ══════════════════════════════════════════════════════════════════════
          DESKTOP: PIXEL-PERFECT COMPOSITION FRAME (>= 1024px)
          Aspect ratio 3/2, max 1440px, container-type: inline-size
          All coordinates positioned in % of frame, all fonts in cqw
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="hidden lg:block w-full max-w-[1440px]">
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
          {/* ── Headline: name lockup (x 4%, y 12%, 54cqw wide) ── */}
          <div
            className="absolute z-30 pointer-events-none"
            style={{ left: '4%', top: '12%', width: '54cqw' }}
          >
            {nameLockup}
          </div>

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
          MOBILE + TABLET (< 1024px)
          Phones: one column  → headline, portrait, tagline, stats (2x2)
          Tablets (>= 640px): two columns → headline + copy | portrait, stats (4 across)
          ══════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 mx-auto w-full max-w-4xl select-none px-5 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:hidden">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-[1.12fr_1fr] sm:items-center sm:gap-x-8">
          {/* Headline */}
          <div className="sm:col-start-1 sm:row-start-1">{nameLockup}</div>

          {/* Portrait with dust burst + badge */}
          <div
            className="relative mx-auto w-full max-w-[300px] sm:col-start-2 sm:row-span-2 sm:row-start-1 sm:max-w-[380px]"
            style={{ aspectRatio: '524 / 693' }}
          >
            <div className="absolute inset-0 -z-10 flex scale-[1.35] items-center justify-center">
              <DustBurst className="h-full w-full" />
            </div>

            <div
              className="relative h-full w-full"
              style={{ filter: 'drop-shadow(0 0 30px rgba(123,92,224,0.35))' }}
            >
              <div
                className="relative h-full w-full"
                style={{ maskImage: PORTRAIT_SIDE_FADE, WebkitMaskImage: PORTRAIT_SIDE_FADE }}
              >
                <div
                  className="relative h-full w-full"
                  style={{ maskImage: PORTRAIT_BOTTOM_FADE, WebkitMaskImage: PORTRAIT_BOTTOM_FADE }}
                >
                  <Image
                    src="/hero-portrait.png"
                    alt="Olanrewaju Sorunke portrait"
                    fill
                    priority
                    sizes="(min-width: 640px) 380px, 300px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-1 z-30 h-20 w-20 sm:-right-3 sm:h-24 sm:w-24">
              <OrbitBadge className="h-full w-full" />
            </div>
          </div>

          {/* Tagline, code line, availability */}
          <div className="space-y-5 text-center sm:col-start-1 sm:row-start-2 sm:text-left">
            <p className="font-sans text-sm font-medium uppercase leading-relaxed tracking-wider text-[#f4f4f6] sm:text-base">
              I DESIGN &amp; CODE<br />
              DIGITAL EXPERIENCES<br />
              THAT INSPIRE.
            </p>
            <p className="font-mono text-xs tracking-wide text-[#b9a6ff] sm:text-sm">
              &lt;/ CODE, DESIGN, DEPLOY /&gt;
            </p>
            <div className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-[#7b5ce0]/30 bg-[#120d22]/70 px-4 py-3 sm:mx-0">
              <span className="h-2 w-2 rounded-full bg-[#7b5ce0] animate-pulse-glow" />
              <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#f4f4f6]">
                AVAILABLE FOR PROJECTS
              </span>
            </div>
          </div>
        </div>

        {/* Divider + stats */}
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:mt-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center sm:items-start">
              <span className="font-sans text-3xl font-bold text-[#9a80f0] sm:text-4xl">{stat.value}</span>
              <span className="mt-1 text-center font-sans text-[11px] font-medium uppercase tracking-widest text-[#a8a5b8] sm:text-left sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
