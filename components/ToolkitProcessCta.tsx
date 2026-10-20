import React from 'react';
import Link from 'next/link';
import { toolkitList, TechTool } from '@/src/content/stack';
import { processSteps } from '@/src/content/process';

function TechIcon({ iconId }: { iconId: TechTool['iconId'] }) {
  switch (iconId) {
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.234-2.625h11.203l.235-2.625H5.859l.703 7.875h10.454l-.469 5.25-4.547 1.266-4.547-1.266-.312-3.515H4.5l.469 6.14 7.031 1.954 7.031-1.954.938-10.5H8.531z" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.5H5.41l.24 2.7h12.44l-.47 5.27-5.62 1.56-5.62-1.56-.24-2.7H3.45l.47 5.39 8.08 2.25 8.08-2.25 1.01-11.41z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.017-.88-1.798-2.585-2.493l-.865-.353c-.767-.317-1.1-.643-1.1-1.182 0-.613.48-1.043 1.296-1.043.83 0 1.28.379 1.48 1.056l1.797-.738c-.352-1.12-1.244-1.898-2.63-1.898-1.826 0-3.072 1.155-3.072 2.766 0 1.344.832 2.152 2.404 2.799l.864.354c.91.373 1.232.784 1.232 1.372 0 .753-.623 1.242-1.6 1.242-1.135 0-1.748-.606-2.008-1.372l-1.84.737c.365 1.328 1.452 2.227 3.208 2.227 2.102 0 3.328-1.144 3.328-2.923v-.002zm-8.868-6.195H11.08v5.717c0 1.404-.627 1.907-1.706 1.907-.74 0-1.22-.317-1.464-.784l-1.637 1.012c.573 1.11 1.626 1.687 3.101 1.687 2.269 0 3.791-1.278 3.791-3.644v-5.895z" />
        </svg>
      );
    case 'typescript':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M1.5 0h21c.8 0 1.5.7 1.5 1.5v21c0 .8-.7 1.5-1.5 1.5h-21C.7 24 0 23.3 0 22.5v-21C0 .7.7 0 1.5 0zm10.7 7.7H4.8v2.4h2.1v9.3h2.2v-9.3h2.1V7.7zm5.1 6.1c-.8-.5-1.5-.9-2.2-1.3-.6-.4-.9-.9-.9-1.6 0-1.3 1.1-2.3 2.6-2.3 1.3 0 2.3.5 3 1.3l-1.5 1.2c-.4-.4-.9-.7-1.5-.7-.5 0-.9.3-.9.7 0 .4.3.6.8.9.9.5 1.8 1 2.5 1.6.9.8 1.2 1.7 1.2 2.6 0 1.6-1.3 2.6-3.2 2.6-1.6 0-2.8-.7-3.6-1.9l1.5-1.1c.5.7 1.2 1.1 2 1.1.7 0 1.1-.3 1.1-.8 0-.5-.3-.8-1-1.2z" />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <ellipse cx="12" cy="12" rx="10" ry="3.8" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
          </g>
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
          <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M7.5 16.5V7.5l9 11h-1.8L8.7 9.8v6.7H7.5zm7.8-5V7.5h1.4v5.3L15.3 11.5z" fill="currentColor" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      );
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M12 2.25l9 5.2v10.4l-9 5.2-9-5.2V7.45l9-5.2zm0 2.31L4.8 9.1v7.8L12 21.09l7.2-4.19V9.1L12 4.56zm-1.5 5.69h3v1.5h-3v-1.5zm0 3h3v3.75h-3v-3.75z" />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2H8zm8 0h-4v8h4a4 4 0 1 0 0-8zm-8 8a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8H8zm8 0h-4v8h4a4 4 0 1 0 0-8zM8 18a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4v-4H8z" />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M17.583 0L3.187 13.435 0 10.985v2.03l2.87 2.197L0 17.41v2.03l3.187-2.45 14.396 13.435L24 28.188V2.237L17.583 0zm-.92 6.787v16.851L6.72 15.212l9.943-8.425z" />
        </svg>
      );
    case 'firebase':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7" aria-hidden="true">
          <path d="M4.14 17.65L6.46 3.13c.09-.56.84-.75 1.18-.3L10.7 7.7l-6.56 9.95zm14.72.63L16.2 5.07c-.12-.66-.99-.8-1.32-.21l-3.3 5.95 7.28 7.47zM3.4 19.34L1.7 8.78c-.09-.59.62-.99 1.05-.6l14.88 12.78-10.74 3.01c-.56.16-1.15-.04-1.49-.63z" />
        </svg>
      );
  }
}

export default function ToolkitProcessCta() {
  return (
    <section
      id="process"
      aria-labelledby="toolkit-process-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20 border-b border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

        {/* ── CARD A: MY TOOLKIT ── */}
        <div className="bg-[#12121C] rounded-2xl border border-white/5 p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-[rgba(167,139,250,0.25)] transition-colors duration-300">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-display uppercase text-2xl text-[#A78BFA] tracking-tight">
                MY TOOLKIT
              </h2>
              <span className="text-[#A78BFA] animate-twinkle text-sm" aria-hidden="true">
                ✦
              </span>
            </div>

            {/* 3 rows × 4 cols icon grid */}
            <div className="grid grid-cols-4 gap-y-5 gap-x-3 items-center justify-items-center">
              {toolkitList.map((tool) => (
                <div
                  key={tool.name}
                  className="group flex flex-col items-center justify-center gap-2 text-zinc-400 hover:text-[#A78BFA] transition-colors duration-300 cursor-default w-full py-1"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 group-hover:border-[rgba(167,139,250,0.3)] group-hover:bg-[rgba(167,139,250,0.08)] flex items-center justify-center transition-all duration-300">
                    <TechIcon iconId={tool.iconId} />
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors text-center truncate max-w-full">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-zinc-600 flex justify-between">
            <span>MODERN STACK</span>
            <span>12 TOOLS REGISTRY</span>
          </div>
        </div>

        {/* ── CARD B: WORK PROCESS ── */}
        <div className="bg-[#12121C] rounded-2xl border border-white/5 p-6 sm:p-7 flex flex-col justify-between gap-6 hover:border-[rgba(167,139,250,0.25)] transition-colors duration-300">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <h2 className="font-display uppercase text-2xl text-[#A78BFA] tracking-tight">
                WORK PROCESS
              </h2>
              <span className="text-[#A78BFA] animate-twinkle text-sm" aria-hidden="true">
                ✦
              </span>
            </div>

            {/* Vertical timeline: 4 steps */}
            <div className="relative pl-2 py-1 space-y-6">
              {/* Connecting vertical line */}
              <div
                className="absolute left-[21px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-[#A78BFA]/50 via-[#A78BFA]/20 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {processSteps.map((step) => (
                <div key={step.step} className="relative flex items-start gap-4 group">
                  {/* Numbered circle (28px) */}
                  <div className="w-7 h-7 rounded-full border border-[rgba(167,139,250,0.4)] text-[#A78BFA] bg-[#12121C] font-mono text-xs font-semibold flex items-center justify-center shrink-0 z-10 group-hover:border-[#A78BFA] group-hover:scale-105 transition-all duration-300 shadow-sm">
                    {step.step}
                  </div>

                  {/* Title & 1-line description */}
                  <div className="space-y-0.5 pt-0.5">
                    <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#A78BFA] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-zinc-500 text-xs font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 font-mono text-[10px] text-zinc-600 flex justify-between">
            <span>METHODOLOGY</span>
            <span>AGILE & SHIP FAST</span>
          </div>
        </div>

        {/* ── CARD C: CTA PANEL ── */}
        <div className="relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] min-h-[360px] lg:min-h-full shadow-xl">
          {/* Subtle Background Pattern & Glow */}
          <div
            className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10 blur-2xl select-none"
            aria-hidden="true"
          />

          {/* Top: Headline & Sparkles */}
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-2">
              <span className="font-mono text-[11px] tracking-widest text-[#0A0A10]/70 font-semibold uppercase">
                {'// COLLABORATION'}
              </span>
              <span className="text-[#0A0A10] animate-twinkle text-base" aria-hidden="true">
                ✦
              </span>
            </div>

            <h2
              className="font-display uppercase text-3xl sm:text-4xl text-[#0A0A10] tracking-tight leading-[0.94]"
              style={{
                backgroundColor: '#0A0A10',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: '#0A0A10',
              }}
            >
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER.
            </h2>
          </div>

          {/* Bottom: Sub-copy + Button */}
          <div className="space-y-6 pt-6">
            <p className="text-sm text-[#0A0A10]/85 font-sans leading-relaxed">
              I&apos;m open to new opportunities and exciting collaborations.
            </p>

            <Link
              href="#contact"
              className="group/btn inline-flex items-center justify-between w-full bg-[#0A0A10] hover:bg-black text-white rounded-full px-6 py-3.5 font-sans font-medium text-sm transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span className="tracking-wide">GET IN TOUCH</span>
              <span
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
