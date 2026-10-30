'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectCategory } from '@/src/content/projects';

/* All four accents stay in the purple family so the section matches the rest of the site. */
export const CATEGORY_ACCENT: Record<ProjectCategory, string> = {
  ai: '#8B5CF6', // violet
  ecommerce: '#D07CF0', // orchid
  platform: '#7C8CFF', // periwinkle
  tools: '#C4B5FD', // lavender
};

const SPARKLE = 'M0 -5 Q0 0 5 0 Q0 0 0 5 Q0 0 -5 0 Q0 0 0 -5Z';

interface ArtProps {
  accent: string;
  animate: boolean;
}

/* ── AI & SaaS: a tiny neural network with data flowing through it ── */
function AiArt({ accent, animate }: ArtProps) {
  const layers = [
    [30, 70, 110],
    [16, 48, 80, 112],
    [38, 88],
    [64],
  ];
  const xs = [26, 82, 138, 194];
  const lines: { x1: number; y1: number; x2: number; y2: number }[] = [];
  layers.forEach((layer, li) => {
    if (li === layers.length - 1) return;
    layer.forEach((y1) =>
      layers[li + 1].forEach((y2) => lines.push({ x1: xs[li], y1, x2: xs[li + 1], y2 })),
    );
  });

  return (
    <svg viewBox="0 0 220 128" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {lines.map((l, k) => (
        <motion.line
          key={k}
          {...l}
          stroke={accent}
          strokeOpacity={0.4}
          strokeWidth={1}
          strokeDasharray="3 5"
          animate={animate ? { strokeDashoffset: [0, -16] } : undefined}
          transition={{ duration: 1.4 + (k % 4) * 0.35, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {layers.map((layer, li) =>
        layer.map((y, ni) => {
          const isOutput = li === layers.length - 1;
          return (
            <motion.circle
              key={`${li}-${ni}`}
              cx={xs[li]}
              cy={y}
              r={isOutput ? 9 : 5}
              fill={isOutput ? accent : '#0d0b18'}
              stroke={accent}
              strokeWidth={1.6}
              animate={
                animate
                  ? { opacity: [0.55, 1, 0.55], scale: [1, 1.18, 1] }
                  : undefined
              }
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: li * 0.35 + ni * 0.14,
              }}
            />
          );
        }),
      )}
      <g transform="translate(194 64)">
        <motion.path
          d={SPARKLE}
          fill="#fff"
          transform="scale(1.4)"
          animate={animate ? { opacity: [0.2, 1, 0.2] } : undefined}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </g>
    </svg>
  );
}

/* ── AI & SaaS (variant 1): a fanned deck of AI-generated flashcards ── */
function FlashcardsArt({ accent, animate }: ArtProps) {
  const cards = [
    { rotate: -14, x: -16, op: 0.35, dur: 5.4 },
    { rotate: -6, x: -6, op: 0.6, dur: 4.6 },
    { rotate: 4, x: 8, op: 1, dur: 4 },
  ];
  return (
    <svg viewBox="0 0 220 128" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {cards.map((c, i) => (
        <motion.g
          key={i}
          style={{ originX: 0.5, originY: 0.5 }}
          initial={{ rotate: c.rotate, x: c.x }}
          animate={
            animate
              ? { rotate: [c.rotate - 2.5, c.rotate + 2.5, c.rotate - 2.5], y: [0, i === 2 ? -6 : -3, 0] }
              : undefined
          }
          transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        >
          <rect
            x={58}
            y={16}
            width={104}
            height={86}
            rx={9}
            fill="#0f0c1d"
            stroke={accent}
            strokeOpacity={c.op}
            strokeWidth={1.5}
          />
          {i === 2 && (
            <>
              <rect x={70} y={30} width={44} height={7} rx={3.5} fill={accent} fillOpacity={0.85} />
              <rect x={70} y={46} width={80} height={4} rx={2} fill="#fff" fillOpacity={0.2} />
              <rect x={70} y={55} width={66} height={4} rx={2} fill="#fff" fillOpacity={0.2} />
              <rect x={70} y={64} width={72} height={4} rx={2} fill="#fff" fillOpacity={0.2} />
              <path d="M72 86 L77 91 L87 80" fill="none" stroke={accent} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              <g transform="translate(144 34)">
                <motion.path
                  d={SPARKLE}
                  fill="#fff"
                  transform="scale(1.6)"
                  animate={animate ? { opacity: [0.3, 1, 0.3], rotate: [0, 90, 0] } : undefined}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                />
              </g>
            </>
          )}
        </motion.g>
      ))}
      {[
        [34, 30],
        [190, 24],
        [186, 100],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <motion.path
            d={SPARKLE}
            fill={accent}
            animate={animate ? { scale: [0.5, 1.2, 0.5], opacity: [0.2, 1, 0.2] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ── E-Commerce: a floating shopping bag with a swinging price tag ── */
function EcommerceArt({ accent, animate }: ArtProps) {
  return (
    <svg viewBox="0 0 200 130" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      <motion.g
        animate={animate ? { y: [0, -6, 0] } : undefined}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* handle */}
        <path
          d="M80 48 V40 C80 20 120 20 120 40 V48"
          fill="none"
          stroke={accent}
          strokeWidth={2}
          strokeLinecap="round"
        />
        {/* body */}
        <path
          d="M66 48 H134 L142 112 Q142.6 118 136 118 H64 Q57.4 118 58 112 Z"
          fill={accent}
          fillOpacity={0.14}
          stroke={accent}
          strokeWidth={2}
          strokeLinejoin="round"
        />
        <g transform="translate(100 84)">
          <motion.path
            d={SPARKLE}
            fill="#fff"
            transform="scale(2.2)"
            animate={animate ? { opacity: [0.5, 1, 0.5], rotate: [0, 90, 0] } : undefined}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
        {/* price tag swinging from the handle */}
        <motion.g
          style={{ originX: 0, originY: 0 }}
          animate={animate ? { rotate: [-12, 10, -12] } : undefined}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M122 42 L134 62" stroke={accent} strokeWidth={1.2} fill="none" />
          <path
            d="M126 62 H148 L156 72 L148 82 H126 Z"
            fill="#0d0b18"
            stroke={accent}
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <circle cx={132} cy={72} r={2} fill={accent} />
          <rect x={138} y={69} width={10} height={2.6} rx={1.3} fill={accent} fillOpacity={0.8} />
          <rect x={138} y={74} width={6} height={2.6} rx={1.3} fill="#fff" fillOpacity={0.35} />
        </motion.g>
      </motion.g>
      {[
        [34, 34],
        [168, 30],
        [30, 100],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <motion.path
            d={SPARKLE}
            fill={accent}
            animate={animate ? { scale: [0.5, 1.2, 0.5], opacity: [0.2, 1, 0.2] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ── E-Commerce (variant 1): global freight & cargo logistics in transit ── */
function FreightLogisticsArt({ accent, animate }: ArtProps) {
  return (
    <svg viewBox="0 0 220 130" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {/* Curved global transit route */}
      <motion.path
        d="M 28 88 Q 110 32 192 68"
        fill="none"
        stroke={accent}
        strokeWidth={1.5}
        strokeDasharray="4 6"
        strokeOpacity={0.45}
        animate={animate ? { strokeDashoffset: [0, -20] } : undefined}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
      {/* Waypoint nodes */}
      <circle cx={28} cy={88} r={3} fill={accent} />
      <circle cx={192} cy={68} r={3.5} fill={accent} />
      <motion.circle
        cx={192}
        cy={68}
        r={7}
        fill="none"
        stroke={accent}
        strokeWidth={1}
        animate={animate ? { scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] } : undefined}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Isometric Shipping Container / Cargo Unit */}
      <motion.g
        animate={animate ? { y: [0, -5, 0] } : undefined}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Top face */}
        <polygon
          points="108,34 154,52 110,68 64,50"
          fill="#130e24"
          stroke={accent}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        {/* Left / front-left face */}
        <polygon
          points="64,50 110,68 110,102 64,84"
          fill={accent}
          fillOpacity={0.18}
          stroke={accent}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        {/* Right / front-right face */}
        <polygon
          points="110,68 154,52 154,86 110,102"
          fill={accent}
          fillOpacity={0.28}
          stroke={accent}
          strokeWidth={1.5}
          strokeLinejoin="round"
        />
        {/* Ribbed container ridges on left face */}
        <line x1={76} y1={55} x2={76} y2={88} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        <line x1={87} y1={59} x2={87} y2={93} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        <line x1={98} y1={63} x2={98} y2={97} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        {/* Ribbed ridges on right face */}
        <line x1={121} y1={64} x2={121} y2={98} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        <line x1={132} y1={60} x2={132} y2={94} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        <line x1={143} y1={56} x2={143} y2={90} stroke={accent} strokeWidth={1} strokeOpacity={0.6} />
        {/* Sparkle beacon on corner */}
        <g transform="translate(110 68)">
          <motion.path
            d={SPARKLE}
            fill="#fff"
            transform="scale(1.8)"
            animate={animate ? { opacity: [0.4, 1, 0.4], rotate: [0, 90, 0] } : undefined}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </g>
      </motion.g>

      {/* Decorative stars */}
      {[
        [36, 42],
        [182, 34],
        [176, 108],
      ].map(([x, y], i) => (
        <g key={i} transform={`translate(${x} ${y})`}>
          <motion.path
            d={SPARKLE}
            fill={accent}
            animate={animate ? { scale: [0.5, 1.2, 0.5], opacity: [0.2, 1, 0.2] } : undefined}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.6 }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ── Platforms: layered browser windows drifting, with a cursor ── */
function PlatformArt({ accent, animate }: ArtProps) {
  const windows = [
    { x: 14, y: 12, w: 128, h: 82, op: 0.35, dy: -4, dur: 5.2 },
    { x: 42, y: 32, w: 128, h: 82, op: 0.6, dy: -5, dur: 6.2 },
    { x: 70, y: 52, w: 128, h: 78, op: 1, dy: -3, dur: 4.6 },
  ];
  return (
    <svg viewBox="0 0 220 140" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {windows.map((win, i) => (
        <motion.g
          key={i}
          animate={animate ? { y: [0, win.dy, 0], x: [0, 2, 0] } : undefined}
          transition={{ duration: win.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          <rect
            x={win.x}
            y={win.y}
            width={win.w}
            height={win.h}
            rx={8}
            fill="#0f0c1d"
            stroke={accent}
            strokeOpacity={win.op}
            strokeWidth={1.4}
          />
          <line
            x1={win.x}
            y1={win.y + 16}
            x2={win.x + win.w}
            y2={win.y + 16}
            stroke={accent}
            strokeOpacity={win.op * 0.5}
          />
          {[10, 18, 26].map((dx) => (
            <circle key={dx} cx={win.x + dx} cy={win.y + 8} r={2.2} fill={accent} fillOpacity={win.op} />
          ))}
          <rect x={win.x + 12} y={win.y + 26} width={52} height={6} rx={3} fill={accent} fillOpacity={win.op * 0.8} />
          <rect x={win.x + 12} y={win.y + 38} width={96} height={4} rx={2} fill="#fff" fillOpacity={0.14 * win.op + 0.04} />
          <rect x={win.x + 12} y={win.y + 47} width={74} height={4} rx={2} fill="#fff" fillOpacity={0.14 * win.op + 0.04} />
          {i === 2 &&
            [0, 1, 2].map((c) => (
              <rect
                key={c}
                x={win.x + 12 + c * 36}
                y={win.y + 58}
                width={30}
                height={12}
                rx={3}
                fill={accent}
                fillOpacity={0.22}
              />
            ))}
        </motion.g>
      ))}
      {/* cursor */}
      <motion.path
        d="M0 0 L0 14 L4 10.5 L7 17 L9.5 16 L6.5 9.5 L12 9.5 Z"
        fill="#fff"
        stroke={accent}
        strokeWidth={1}
        initial={{ x: 120, y: 94 }}
        animate={animate ? { x: [120, 168, 148, 96, 120], y: [94, 108, 80, 102, 94] } : undefined}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

/* ── Tools & Creative: a wireframe 3D cube with an orbiting dot and code glyphs ── */
function ToolsArt({ accent, animate, variant }: ArtProps & { variant: number }) {
  const half = 30;
  const faces = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(90deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateY(-90deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];
  const orbit = Array.from({ length: 9 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2;
    return { x: 100 + 74 * Math.cos(a), y: 65 + 20 * Math.sin(a) };
  });
  const glyphs = [
    { text: '</>', style: { left: '14%', top: '20%' }, delay: 0 },
    { text: '{ }', style: { right: '14%', top: '16%' }, delay: 0.7 },
    { text: '01', style: { left: '18%', bottom: '14%' }, delay: 1.3 },
    { text: '✦', style: { right: '18%', bottom: '18%' }, delay: 0.4 },
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center" style={{ perspective: 600 }}>
      <svg
        viewBox="0 0 200 130"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <ellipse cx={100} cy={65} rx={74} ry={20} fill="none" stroke={accent} strokeOpacity={0.35} strokeDasharray="2 4" />
        <motion.circle
          r={3.2}
          fill={accent}
          initial={{ cx: orbit[0].x, cy: orbit[0].y }}
          animate={animate ? { cx: orbit.map((p) => p.x), cy: orbit.map((p) => p.y) } : undefined}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
      </svg>

      {variant === 1 ? (
        /* wireframe globe: three great circles + an equator spinning around the Y axis */
        <>
          <motion.div
            style={{ width: 74, height: 74, transformStyle: 'preserve-3d' }}
            initial={{ rotateX: -18, rotateY: 0 }}
            animate={animate ? { rotateX: -18, rotateY: [0, 360] } : undefined}
            transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
          >
            {['rotateY(0deg)', 'rotateY(60deg)', 'rotateY(120deg)', 'rotateX(90deg)'].map((t) => (
              <div
                key={t}
                className="absolute inset-0 rounded-full"
                style={{ transform: t, border: `1.5px solid ${accent}`, boxShadow: `inset 0 0 12px ${accent}26` }}
              />
            ))}
          </motion.div>
          <span
            className="absolute h-3.5 w-3.5 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, #fff, ${accent})`,
              boxShadow: `0 0 18px ${accent}`,
            }}
          />
        </>
      ) : (
      <motion.div
        style={{ width: half * 2, height: half * 2, transformStyle: 'preserve-3d' }}
        initial={{ rotateX: -24, rotateY: 30 }}
        animate={animate ? { rotateX: -24, rotateY: [30, 390] } : undefined}
        transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
      >
        {faces.map((transform, i) => (
          <div
            key={i}
            className="absolute inset-0"
            style={{
              transform,
              border: `1.5px solid ${accent}`,
              background: `${accent}14`,
              boxShadow: `inset 0 0 14px ${accent}33`,
            }}
          />
        ))}
      </motion.div>
      )}

      {glyphs.map((g) => (
        <motion.span
          key={g.text}
          className="absolute font-mono text-[11px] font-semibold"
          style={{ ...g.style, color: accent, opacity: 0.8 }}
          animate={animate ? { y: [0, -6, 0] } : undefined}
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: g.delay }}
        >
          {g.text}
        </motion.span>
      ))}
    </div>
  );
}

export default function CategoryArt({
  category,
  variant = 0,
}: {
  category: ProjectCategory;
  variant?: number;
}) {
  const reduceMotion = useReducedMotion();
  const animate = !reduceMotion;
  const accent = CATEGORY_ACCENT[category];
  const gridMask = 'radial-gradient(ellipse at center, #000 30%, transparent 75%)';

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at 50% 45%, ${accent}3d 0%, ${accent}12 42%, transparent 72%), linear-gradient(180deg, #15112b 0%, #0d0b18 100%)`,
      }}
    >
      {/* faint blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(167,139,250,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.08) 1px, transparent 1px)',
          backgroundSize: '26px 26px',
          maskImage: gridMask,
          WebkitMaskImage: gridMask,
        }}
      />
      {/* art — leaves room for the chips at the top and bottom of the cover */}
      <div className="absolute inset-x-6 bottom-14 top-11 transition-transform duration-500 ease-out group-hover:scale-110">
        {category === 'ai' && variant === 0 && <AiArt accent={accent} animate={animate} />}
        {category === 'ai' && variant === 1 && <FlashcardsArt accent={accent} animate={animate} />}
        {category === 'ecommerce' && variant === 0 && <EcommerceArt accent={accent} animate={animate} />}
        {category === 'ecommerce' && variant === 1 && <FreightLogisticsArt accent={accent} animate={animate} />}
        {category === 'platform' && <PlatformArt accent={accent} animate={animate} />}
        {category === 'tools' && <ToolsArt accent={accent} animate={animate} variant={variant} />}
      </div>
    </div>
  );
}
