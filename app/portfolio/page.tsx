'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Mail } from 'lucide-react';

import { projects } from '@/data/projects';
import {
  FloatingBlob,
  ProjectCard,
  Footer,
  ClayButton,
  ClayPlaceholder,
} from '@/components/clay';

export default function PortfolioPage() {
  const bentoColors: Array<'lavender' | 'mint' | 'sunny' | 'pink-soft' | 'cream'> = [
    'lavender',
    'mint',
    'sunny',
    'pink-soft',
    'cream',
  ];

  return (
    <div className="relative min-h-screen bg-[#FCEFDD] text-[#4B2E25] font-sans overflow-x-hidden selection:bg-[#B49CF0] selection:text-[#4B2E25]">
      {/* 1. Ambient Floating Clay Blobs */}
      <FloatingBlob />

      {/* 2. Floating Clay Header / Nav */}
      <header className="sticky top-3 sm:top-5 z-50 max-w-6xl mx-auto px-4 sm:px-6 select-none">
        <nav className="clay clay-cream px-5 py-3 sm:py-3.5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading font-bold text-sm sm:text-base text-[#4B2E25] hover:text-[#F2508A] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8A6BD4] rounded-full px-3 py-1.5 bg-[#FFF6E8] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_4px_rgba(75,46,37,0.06)]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="hidden sm:flex items-center gap-2 font-heading font-bold text-xl text-[#4B2E25]"
            >
              <div className="w-7 h-7">
                <ClayPlaceholder name="logo-flower" width={28} height={28} alt="Flower" />
              </div>
              <span>Zeni<span className="text-[#F2508A]">Tech</span></span>
            </Link>

            <ClayButton
              variant="pink"
              href="/#contact"
              className="!px-5 !py-2.5 !text-xs sm:!text-sm gap-2"
              ariaLabel="Hire Me"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFF6E8]" />
              <span>Hire Me</span>
            </ClayButton>
          </div>
        </nav>
      </header>

      {/* 3. Main Content: Catalogue Header + 9 Bento Projects */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFF6E8] text-[#4B2E25] font-heading font-bold text-xs uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(75,46,37,0.06)]">
            <Sparkles className="w-3.5 h-3.5 text-[#F2508A]" />
            <span>Complete Catalogue</span>
          </div>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#4B2E25] tracking-tight clay-emboss-brown leading-[1.06]">
            All Production Case Studies
          </h1>

          <p className="text-base sm:text-lg text-[#6B4A3E] font-semibold leading-relaxed">
            A comprehensive showcase of all {projects.length} web applications, SaaS platforms, and AI integrations engineered to date.
          </p>
        </div>

        {/* 9-Project Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            // First project and 6th project are featured (2 cols)
            const isFeatured = idx === 0 || idx === 5;
            return (
              <ProjectCard
                key={project.title}
                project={project}
                variant={bentoColors[idx % bentoColors.length]}
                featured={isFeatured}
                index={idx}
              />
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-16 sm:mt-24 text-center">
          <div className="clay clay-lavender rounded-[32px] p-8 sm:p-12 max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-[#4B2E25] tracking-tight clay-emboss-brown">
              Ready to start your project?
            </h2>
            <p className="text-base text-[#4B2E25]/90 font-semibold max-w-lg mx-auto">
              Let&apos;s build a standout web application or integrate AI intelligence into your business workflow.
            </p>
            <div className="pt-2 flex justify-center">
              <ClayButton
                variant="cream"
                href="/#contact"
                className="!px-7 !py-3.5 font-bold shadow-md"
                ariaLabel="Get in touch"
              >
                <Mail className="w-4 h-4 text-[#4B2E25]" />
                <span>Get in Touch</span>
              </ClayButton>
            </div>
          </div>
        </div>
      </main>

      {/* 4. Floating Cream Clay Footer */}
      <Footer />
    </div>
  );
}