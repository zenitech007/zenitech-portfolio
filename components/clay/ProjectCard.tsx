'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import ClayChip from './ClayChip';
import type { ClayCardVariant } from './ClayCard';

export interface ProjectData {
  title: string;
  liveLink: string;
  techStack: string[];
  challenge: string;
  solution: string;
  impact: string;
}

interface ProjectCardProps {
  project: ProjectData;
  variant?: ClayCardVariant;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({
  project,
  variant = 'cream',
  featured = false,
  index = 0,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Color mappings for inner accent chips
  const chipVariantMap: Record<ClayCardVariant, 'cream' | 'lavender' | 'pink' | 'mint' | 'sunny'> = {
    lavender: 'lavender',
    mint: 'mint',
    sunny: 'sunny',
    'pink-soft': 'pink',
    cream: 'cream',
    pink: 'pink',
  };

  const currentChipVariant = chipVariantMap[variant] || 'lavender';

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        type: 'spring' as const,
        stiffness: 300,
        damping: 24,
        delay: index * 0.08,
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              y: -6,
              transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
            }
      }
      whileTap={
        shouldReduceMotion
          ? {}
          : {
              scale: 0.985,
              transition: { type: 'spring' as const, stiffness: 500, damping: 15 },
            }
      }
      className={`group relative clay clay-${variant} rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
        featured ? 'lg:col-span-2' : 'col-span-1'
      }`}
    >
      <div>
        {/* Card Header: Project Number Badge + Live Arrow Button */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xs sm:text-sm px-3 py-1 rounded-full bg-[#FFF6E8]/70 text-[#4B2E25] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_4px_rgba(75,46,37,0.06)]">
              Case Study #{String(index + 1).padStart(2, '0')}
            </span>
            {featured && (
              <span className="inline-flex items-center gap-1 font-heading font-bold text-xs px-2.5 py-1 rounded-full bg-[#F2508A] text-[#FFF6E8] shadow-[0_4px_8px_rgba(242,80,138,0.35)]">
                <Sparkles className="w-3 h-3" />
                Featured
              </span>
            )}
          </div>

          {/* Round Clay Arrow Button linking directly to project */}
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit live site for ${project.title}`}
            className="clay-arrow-btn w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-6 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#8A6BD4]"
          >
            <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#4B2E25] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#4B2E25] tracking-tight mb-3 group-hover:text-[#F2508A] transition-colors duration-200">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6BD4] rounded-lg"
          >
            {project.title}
          </a>
        </h3>

        {/* Featured Big Preview with Clay Bezel */}
        {featured ? (
          <div className="my-6 space-y-5">
            {/* Clay Bezel Frame */}
            <div className="rounded-[24px] sm:rounded-[28px] bg-[#FCEFDD]/80 p-4 sm:p-5 shadow-[inset_0_4px_10px_rgba(75,46,37,0.14),inset_0_-2px_4px_rgba(255,255,255,0.9)] border border-white/40">
              {/* Bezel Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#4B2E25]/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#F2508A] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]" />
                  <div className="w-3 h-3 rounded-full bg-[#F9D24A] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]" />
                  <div className="w-3 h-3 rounded-full bg-[#7CC589] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#6B4A3E]/80 truncate max-w-[200px] sm:max-w-none">
                  {project.liveLink.replace('https://', '')}
                </span>
              </div>

              {/* Solution Narrative */}
              <p className="text-sm sm:text-base text-[#4B2E25] font-semibold leading-relaxed mb-4">
                {project.solution}
              </p>

              {/* Impact Callout in Mint Clay Pill */}
              <div className="flex items-start gap-2.5 bg-[#A9DDB0]/40 rounded-[18px] p-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_2px_4px_rgba(124,197,137,0.2)]">
                <CheckCircle2 className="w-5 h-5 text-[#4B2E25] flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-[#4B2E25] font-bold leading-snug">
                  <span className="uppercase text-[11px] tracking-wider text-[#4B2E25]/70 block mb-0.5">Key Impact</span>
                  {project.impact}
                </p>
              </div>
            </div>

            {/* Challenge Snippet */}
            <p className="text-sm sm:text-base text-[#6B4A3E] font-medium leading-relaxed">
              <strong className="text-[#4B2E25] font-bold">Challenge: </strong>
              {project.challenge}
            </p>
          </div>
        ) : (
          <div className="my-4 space-y-3">
            <p className="text-sm sm:text-base text-[#6B4A3E] font-medium leading-relaxed line-clamp-3">
              {project.challenge}
            </p>
            {/* Impact Highlight */}
            <div className="bg-[#FFF6E8]/60 rounded-[18px] p-3 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_6px_rgba(75,46,37,0.06)]">
              <p className="text-xs sm:text-sm text-[#4B2E25] font-semibold line-clamp-2">
                <strong className="text-[#4B2E25] font-bold">Impact: </strong>
                {project.impact}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Tech Stack Chips & Action Link */}
      <div className="pt-4 border-t border-[#4B2E25]/10 mt-auto">
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
          {project.techStack.map((tech) => (
            <ClayChip key={tech} variant={currentChipVariant}>
              {tech}
            </ClayChip>
          ))}
        </div>

        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#4B2E25] hover:text-[#F2508A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8A6BD4] rounded px-1"
        >
          <span>Explore Live Application</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </motion.article>
  );
}
