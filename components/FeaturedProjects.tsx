'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLabel from '@/components/ui/SectionLabel';
import { featuredProjects, FeaturedProject } from '@/src/content/projects';

function ProjectCard({ project }: { project: FeaturedProject }) {
  const [imageError, setImageError] = useState(false);

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col bg-[#12121C] rounded-2xl overflow-hidden border border-white/5 hover:border-[rgba(167,139,250,0.4)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
      aria-label={`View live project: ${project.title} (${project.subtitle})`}
    >
      {/* ── Image Container (aspect 16/10) ── */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 select-none">
        {!imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot preview`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#171725] text-zinc-600 gap-2 font-mono text-xs">
            <span className="text-2xl text-[#A78BFA]/40 font-display">
              {project.title.slice(0, 2)}
            </span>
            <span>PREVIEW</span>
          </div>
        )}

        {/* Gradient overlay on image */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0A10]/90 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Category chips overlaid on bottom-left of image */}
        {project.tags && project.tags.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#0A0A10]/75 backdrop-blur-md border border-white/10 text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── Card Body (p-5) ── */}
      <div className="p-5 flex flex-col justify-between flex-grow gap-4">
        {/* Top-left index badge OUTSIDE image + Top-right corner arrow icon */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400 tracking-wider">
            {project.index}
          </span>
          <span
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 group-hover:text-[#A78BFA] group-hover:border-[rgba(167,139,250,0.4)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
            aria-hidden="true"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-1">
          <h3 className="font-sans font-bold text-white uppercase text-base sm:text-lg tracking-wide group-hover:text-[#A78BFA] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-xs font-sans">
            {project.subtitle}
          </p>
        </div>
      </div>
    </a>
  );
}

export default function FeaturedProjects() {
  if (!featuredProjects || featuredProjects.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="featured-projects-heading"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 scroll-mt-20 border-b border-white/5"
    >
      {/* ── Header Row: Label + View All Link ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
        <div id="featured-projects-heading">
          <SectionLabel
            accentText="FEATURED"
            whiteText="PROJECTS"
            hasSparkle
            size="md"
          />
        </div>

        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 hover:text-[#A78BFA] transition-colors tracking-wider uppercase"
        >
          <span>VIEW ALL PROJECTS</span>
          <span
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>

      {/* ── 3-Column Projects Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.index} project={project} />
        ))}
      </div>
    </section>
  );
}
