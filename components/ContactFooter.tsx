'use client';

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { contactDetails, ContactIconType } from '@/src/content/contact';
import { socialLinks, footerTagline, SocialIconType } from '@/src/content/socials';
import { profile } from '@/src/content/profile';

function ContactIcon({ type }: { type: ContactIconType }) {
  switch (type) {
    case 'email':
      return (
        <svg
          className="w-5 h-5 text-[#A78BFA] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      );
    case 'phone':
      return (
        <svg
          className="w-5 h-5 text-[#A78BFA] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
          />
        </svg>
      );
    case 'website':
      return (
        <svg
          className="w-5 h-5 text-[#A78BFA] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
          />
        </svg>
      );
    case 'location':
      return (
        <svg
          className="w-5 h-5 text-[#A78BFA] shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      );
  }
}

function SocialIcon({ type }: { type: SocialIconType }) {
  switch (type) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case 'dribbble':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.166 10.463c-.413-.089-2.922-.619-5.875-.246.331.915.632 1.849.897 2.793 2.871.39 4.673 1.621 4.978 1.839-.023-1.54-.423-3.003-1.127-4.386h.127zm-3.084 6.273c-.273-.189-1.859-1.258-4.52-1.637-.624 1.713-1.391 3.342-2.288 4.86 5.048-.052 6.571-2.981 6.808-3.223zm-8.835 5.064c.915-1.488 1.688-3.09 2.308-4.781-3.69-.974-7.214-.249-7.558-.175.787 2.158 2.723 3.96 5.25 4.956zm-6.247-6.997c.414-.078 3.329-.623 6.643.252-.423-1.037-.899-2.072-1.428-3.085-3.308 1.156-5.006 2.658-5.215 2.833zm1.189-4.839c.224-.184 1.762-1.472 4.793-2.529-.982-1.749-2.102-3.344-3.342-4.747-1.796 2.019-2.833 4.619-2.833 7.276 0 .001 1.382 0 1.382 0zm5.176-7.852c1.233 1.386 2.338 2.956 3.308 4.677 2.653-.984 4.821-.926 5.042-.916-1.782-2.261-4.721-3.761-8.35-3.761z" />
        </svg>
      );
    case 'behance':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.976 3-3.414 0-5.75-2.502-5.75-5.961 0-3.364 2.298-6.039 5.807-6.039 3.42 0 5.485 2.459 5.485 5.835 0 .493-.062 1.059-.098 1.296h-8.156c.094 1.547 1.096 2.637 2.766 2.637 1.289 0 2.115-.559 2.533-1.397l2.389.629zm-5.024-4.854c-1.424 0-2.316.891-2.527 2.062h4.947c-.073-1.127-.852-2.062-2.42-2.062zm-12.702 7.854h-6v-14h6.398c3.064 0 5.602 1.488 5.602 4.414 0 1.705-.902 3.033-2.348 3.652 1.838.641 2.822 2.186 2.822 4.148 0 3.314-2.822 4.786-6.474 4.786zm-3-8h2.898c1.559 0 2.602-.705 2.602-2.094 0-1.258-.934-1.906-2.492-1.906h-3.008v4zm0 6h3.297c1.789 0 2.953-.873 2.953-2.398 0-1.469-1.129-2.352-2.906-2.352h-3.344v4.75z" />
        </svg>
      );
  }
}

/* ── Animated purple waves (motion style from the shadcn "animated wave footer") ──
   Each layer is TWO identical wave periods side by side. Sliding a layer by exactly -50%
   lands on the same picture again, so the loop is seamless (no jump at the end). */
const WAVE_PERIOD = 1440;

function wavePath(baseY: number, amp: number, skew: number, close: boolean) {
  const seg = (x0: number) => {
    const x1 = x0 + WAVE_PERIOD / 2;
    const x2 = x0 + WAVE_PERIOD;
    return (
      `C${x0 + skew} ${baseY - amp} ${x1 - skew} ${baseY - amp} ${x1} ${baseY} ` +
      `C${x1 + skew} ${baseY + amp} ${x2 - skew} ${baseY + amp} ${x2} ${baseY}`
    );
  };
  const line = `M0 ${baseY} ${seg(0)} ${seg(WAVE_PERIOD)}`;
  return close ? `${line} V400 H0 Z` : line;
}

// back wave: taller + slower, drifts left. front wave: flatter + faster, drifts right.
const WAVE_LAYERS = [
  { id: 'back', baseY: 150, amp: 90, skew: 260, duration: 38, reverse: false, fillTop: 0.26, fillBottom: 0.04, crest: 0.35 },
  { id: 'front', baseY: 225, amp: 55, skew: 200, duration: 24, reverse: true, fillTop: 0.22, fillBottom: 0.06, crest: 0.25 },
] as const;

function WaveBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[360px] sm:h-[460px] overflow-hidden"
    >
      {/* soft violet glow rising from the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#7B5CE0]/20 to-transparent" />

      {WAVE_LAYERS.map((layer) => (
        <motion.div
          key={layer.id}
          className="absolute bottom-0 left-0 h-full w-[max(200%,2400px)] will-change-transform"
          animate={
            reduceMotion
              ? { x: '0%' }
              : { x: layer.reverse ? ['-50%', '0%'] : ['0%', '-50%'] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: layer.duration, ease: 'linear', repeat: Infinity }
          }
        >
          <svg
            viewBox={`0 0 ${WAVE_PERIOD * 2} 400`}
            preserveAspectRatio="none"
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id={`footer-wave-fill-${layer.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={layer.fillTop} />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity={layer.fillBottom} />
              </linearGradient>
            </defs>
            <path
              d={wavePath(layer.baseY, layer.amp, layer.skew, true)}
              fill={`url(#footer-wave-fill-${layer.id})`}
            />
            <path
              d={wavePath(layer.baseY, layer.amp, layer.skew, false)}
              fill="none"
              stroke="#A78BFA"
              strokeOpacity={layer.crest}
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Terminal-style code card (replaces the portrait in the footer) ──
   Lines type in one by one when the footer scrolls into view; the cursor blinks.
   Values come from src/content/profile.ts so it never goes out of date. */
const SYNTAX = {
  keyword: 'text-[#9a80f0]',
  key: 'text-[#c4b5fd]',
  string: 'text-[#e9e4ff]',
  punct: 'text-[#6f6a8c]',
  plain: 'text-[#d7ccff]',
  prompt: 'text-[#8fd9b6]',
} as const;

type Token = { text: string; className: string };

const baseLocation = profile.location.split('·')[0].trim();

const kv = (key: string, value: string): Token[] => [
  { text: '  ', className: '' },
  { text: key, className: SYNTAX.key },
  { text: ': ', className: SYNTAX.punct },
  { text: `"${value}"`, className: SYNTAX.string },
  { text: ',', className: SYNTAX.punct },
];

const arrayItem = (value: string): Token[] => [
  { text: '    ', className: '' },
  { text: `"${value}"`, className: SYNTAX.string },
  { text: ',', className: SYNTAX.punct },
];

const TERMINAL_LINES: Token[][] = [
  [
    { text: 'const ', className: SYNTAX.keyword },
    { text: 'developer', className: SYNTAX.plain },
    { text: ' = {', className: SYNTAX.punct },
  ],
  kv('name', profile.name),
  kv('role', profile.role),
  kv('base', baseLocation),
  [
    { text: '  ', className: '' },
    { text: 'stack', className: SYNTAX.key },
    { text: ': [', className: SYNTAX.punct },
  ],
  arrayItem('Next.js'),
  arrayItem('TypeScript'),
  arrayItem('Tailwind'),
  [{ text: '  ],', className: SYNTAX.punct }],
  kv('status', 'Available for freelance'),
  [{ text: '};', className: SYNTAX.punct }],
];

const LINE_STAGGER = 0.09;

function TerminalCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();
  const show = inView || Boolean(reduceMotion);

  const lineMotion = (index: number) => ({
    initial: { opacity: 0, x: reduceMotion ? 0 : -6 },
    animate: show ? { opacity: 1, x: 0 } : undefined,
    transition: {
      duration: reduceMotion ? 0 : 0.25,
      delay: reduceMotion ? 0 : 0.15 + index * LINE_STAGGER,
    },
  });

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`${profile.name}, ${profile.role}, based in ${baseLocation}. Works with Next.js, TypeScript and Tailwind. Available for freelance.`}
      className="relative w-full max-w-[340px] sm:max-w-[360px]"
    >
      {/* Purple glow behind the window */}
      <div
        className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#7C3AED]/30 via-[#A78BFA]/15 to-transparent blur-2xl pointer-events-none select-none"
        aria-hidden="true"
      />

      <div
        className="relative overflow-hidden rounded-xl border border-[#A78BFA]/25 bg-[#0b0914]/85 shadow-[0_0_40px_rgba(123,92,224,0.25)] backdrop-blur-sm"
        aria-hidden="true"
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#7b5ce0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#9a80f0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c4b5fd]" />
          </div>
          <span className="font-mono text-[11px] tracking-wide text-[#6f6a8c]">developer.ts</span>
        </div>

        {/* Code */}
        <div className="overflow-x-auto px-4 py-4 font-mono text-[11px] leading-[1.75] sm:text-[12px]">
          {TERMINAL_LINES.map((tokens, i) => (
            <motion.div key={i} className="whitespace-pre" {...lineMotion(i)}>
              {tokens.map((token, j) => (
                <span key={j} className={token.className}>
                  {token.text}
                </span>
              ))}
            </motion.div>
          ))}

          {/* Prompt + blinking cursor */}
          <motion.div className="mt-2 whitespace-pre" {...lineMotion(TERMINAL_LINES.length)}>
            <span className={SYNTAX.prompt}>$ </span>
            <span className={SYNTAX.string}>npm run hire-me</span>
            <motion.span
              className="ml-1 inline-block h-[1.05em] w-[0.55em] translate-y-[0.2em] bg-[#a78bfa]"
              animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 1, 0, 0] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1], ease: 'linear' }
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      aria-label="Contact and Site Footer"
      className="relative isolate overflow-hidden scroll-mt-20 bg-[linear-gradient(to_bottom,#08070d_0%,#0d0a1c_40%,#1a1236_100%)]"
    >
      <WaveBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-24 pb-12">
        {/* ── SECTION 5: ONE FULL-WIDTH SURFACE CARD ── */}
        <div className="bg-[#12121C]/60 backdrop-blur-sm rounded-2xl border border-[#A78BFA]/15 p-8 sm:p-10 lg:p-12 mb-12 shadow-2xl relative overflow-hidden">
          {/* Ambient Subtle Glow */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8B5CF6]/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-center">

            {/* ── LEFT: CONTACT ── */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <h2 className="font-display uppercase text-2xl sm:text-3xl text-[#A78BFA] tracking-tight">
                  CONTACT
                </h2>
                <span className="text-[#A78BFA] animate-sparkle text-sm" aria-hidden="true">
                  ✦
                </span>
              </div>

              <div className="space-y-4 font-sans">
                {contactDetails.map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[rgba(167,139,250,0.08)] flex items-center justify-center shrink-0">
                      <ContactIcon type={row.icon} />
                    </div>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-zinc-300 hover:text-[#A78BFA] text-xs sm:text-sm transition-colors duration-200 focus:outline-none focus-visible:underline"
                      >
                        {row.label}
                      </a>
                    ) : (
                      <span className="text-zinc-300 text-xs sm:text-sm">
                        {row.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ── CENTER: TERMINAL CODE CARD ── */}
            <div className="flex justify-center my-2 md:order-3 md:col-span-2 lg:order-none lg:col-span-1 lg:my-0">
              <TerminalCard />
            </div>

            {/* ── RIGHT: LET'S CONNECT ── */}
            <div className="space-y-6 md:order-2 lg:order-none lg:text-right flex flex-col lg:items-end">
              <div className="flex items-center gap-2">
                <h2 className="font-display uppercase text-2xl sm:text-3xl text-[#A78BFA] tracking-tight">
                  LET&apos;S CONNECT
                </h2>
                <span className="text-[#A78BFA] animate-sparkle text-sm" aria-hidden="true">
                  ✦
                </span>
              </div>

              {/* Row of 4 social icon buttons (40px circle) */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Connect on ${social.label}`}
                    className="w-10 h-10 rounded-full border border-white/10 hover:border-[rgba(167,139,250,0.5)] bg-white/[0.02] hover:bg-[rgba(167,139,250,0.1)] text-zinc-400 hover:text-[#A78BFA] flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}
              </div>

              {/* Mono tag beneath */}
              <div className="font-mono text-[11px] text-zinc-500 tracking-wider">
                {footerTagline}
              </div>
            </div>

          </div>
        </div>

        {/* ── REAL FOOTER BAR UNDER CARD ── */}
        <div className="border-t border-[#A78BFA]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500">
          <div>
            © 2026 {profile.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-2.5 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-[#7b5ce0] animate-pulse-glow" aria-hidden="true" />
            <span>Available for freelance work</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
