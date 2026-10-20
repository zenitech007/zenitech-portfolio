import React from 'react';
import SectionLabel from '@/components/ui/SectionLabel';
import { services, ServiceIconType } from '@/src/content/services';

function ServiceIcon({ type }: { type: ServiceIconType }) {
  switch (type) {
    case 'pen-nodes':
      return (
        <svg
          className="w-6 h-6 text-[#A78BFA] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
          />
          <circle cx="18" cy="18" r="2" strokeWidth="1.5" />
          <circle cx="6" cy="6" r="2" strokeWidth="1.5" />
        </svg>
      );
    case 'code':
      return (
        <svg
          className="w-6 h-6 text-[#A78BFA] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      );
    case 'cube':
      return (
        <svg
          className="w-6 h-6 text-[#A78BFA] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
          />
        </svg>
      );
    case 'lightning':
      return (
        <svg
          className="w-6 h-6 text-[#A78BFA] transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
  }
}

export default function WhatIDo() {
  if (!services || services.length === 0) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20 border-b border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-10 lg:gap-12 items-start">
        {/* Left Column: Heading + Intro */}
        <div className="space-y-4 max-w-sm">
          <SectionLabel
            accentText="WHAT"
            whiteText="I DO"
            hasSparkle
            size="md"
          />
          <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed">
            I design, build and ship modern websites and web applications that are
            fast, responsive and user-focused.
          </p>
        </div>

        {/* Right Column: 4 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => (
            <article
              key={service.index}
              className="group relative bg-[#12121C] rounded-2xl border border-white/5 hover:border-[rgba(167,139,250,0.4)] p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* 1. Purple stroke SVG icon (24px) */}
                <div className="w-10 h-10 rounded-lg bg-[rgba(167,139,250,0.08)] flex items-center justify-center group-hover:bg-[rgba(167,139,250,0.14)] transition-colors duration-300">
                  <ServiceIcon type={service.icon} />
                </div>

                {/* 2. Title: bold white, uppercase, text-sm tracking-wide */}
                <h3 className="font-sans font-bold text-sm tracking-wide text-white uppercase">
                  {service.title}
                </h3>

                {/* 3. Description: zinc-400, text-xs leading-relaxed */}
                <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* 4. Index number bottom-left: mono, zinc-600 */}
              <div className="pt-2 border-t border-white/5 font-mono text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors">
                {service.index}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
