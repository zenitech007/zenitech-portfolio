'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';

import { projects } from '@/data/projects';
import FilmGrain from '@/components/FilmGrain';
import GradientBlobs from '@/components/GradientBlobs';
import MagneticButton from '@/components/MagneticButton';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeToggle from '@/components/ThemeToggle';

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[#7C3AED] selection:text-[#FFFBF5] transition-colors duration-250">
      {/* Background Ambience: Drift Blobs & Film Grain */}
      <GradientBlobs />
      <FilmGrain />

      {/* Header / Nav */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#FFFBF5]/85 dark:bg-[#0A0A0F]/85 border-b border-[#101014]/15 dark:border-white/10 py-4 transition-colors duration-250">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#7C3AED] dark:hover:text-[#38BDF8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg px-2 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Overview</span>
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <MagneticButton
              variant="gradient"
              href="/#contact"
              className="!px-4 !py-2 !text-xs uppercase tracking-wider"
              ariaLabel="Start a project"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start a Project</span>
            </MagneticButton>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Editorial Heading */}
        <SectionHeading
          badge="// COMPLETE CATALOGUE"
          badgeColor="violet"
          title="All Production"
          highlight="Case Studies"
          subtitle={`A comprehensive showcase of all ${projects.length} web applications, SaaS platforms, and AI integrations engineered to date.`}
        />

        {/* Project List in Alternating Editorial Rows */}
        <div className="space-y-12 md:space-y-16">
          {projects.map((project, index) => (
            <Reveal key={project.title} direction="up" delay={0.1} margin="-60px">
              <ProjectCard
                title={project.title}
                liveLink={project.liveLink}
                techStack={project.techStack}
                challenge={project.challenge}
                solution={project.solution}
                impact={project.impact}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t-2 border-[#101014] dark:border-white/10 bg-[#FFFBF5] dark:bg-[#0A0A0F] py-12 px-6 mt-20 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="font-display text-xl font-black tracking-tight text-[#101014] dark:text-[#F5F5FA]"
          >
            <span>Zeni</span>
            <span className="text-[#7C3AED] dark:text-[#38BDF8]">Tech</span>.
          </Link>

          <p className="text-xs text-[#101014]/60 dark:text-[#F5F5FA]/60 font-mono text-center">
            © {new Date().getFullYear()} Olanrewaju Sorunke. All projects engineered with precision and taste.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#7C3AED] dark:hover:text-[#38BDF8] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#101014]/30 dark:text-white/30">✦</span>
            <a
              href="mailto:zenitech007@gmail.com"
              className="text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#FF4D6D] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}