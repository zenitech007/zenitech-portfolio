import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactFooter from '@/components/ContactFooter';
import { projects } from '@/data/projects';
import { profile } from '@/src/content/profile';

export const metadata: Metadata = {
  title: `Project Archive — ${profile.name}`,
  description: `Comprehensive catalogue of all ${projects.length} web applications, SaaS platforms, and digital experiences engineered by ${profile.name}.`,
};

export default function PortfolioArchivePage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A10] text-[#F4F4F5] font-sans selection:bg-[#8B5CF6] selection:text-white">
      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-[#A78BFA] transition-colors"
          >
            <svg className="w-4 h-4 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-[#A78BFA] uppercase tracking-widest font-semibold">
            <span>{'// Full Archive'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-normal uppercase tracking-tight text-white">
            PROJECT REGISTRY
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
            A comprehensive archive of commercial web applications, storefronts, and AI tools built with Next.js, TypeScript, and modern component architectures.
          </p>
        </div>

        {/* 9-Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="p-6 rounded-2xl border border-white/5 bg-[#12121C] hover:border-[rgba(167,139,250,0.4)] transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-500 border-b border-white/5 pb-3">
                  <span>INDEX #{String(idx + 1).padStart(2, '0')}</span>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A78BFA] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                <h2 className="text-lg font-bold text-white tracking-tight uppercase">
                  {project.title}
                </h2>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      <ContactFooter />
    </div>
  );
}