'use client';

import React from 'react';
import { ArrowUpRight, CheckCircle2, Lightbulb, Target } from 'lucide-react';
import SpotlightCard from './SpotlightCard';

export interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  liveLink?: string;
  index?: number;
}

export default function ProjectCard({
  title,
  challenge,
  solution,
  impact,
  techStack,
  liveLink,
  index = 0,
}: ProjectCardProps) {
  const isEven = index % 2 === 0;
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <SpotlightCard className="p-6 md:p-10 lg:p-12">
      <div
        className={`flex flex-col ${
          isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
        } gap-8 lg:gap-14 items-stretch justify-between`}
      >
        {/* Project Header & Meta Column */}
        <div className="flex flex-col justify-between flex-1 space-y-6">
          <div className="space-y-4">
            {/* Project Index & Category */}
            <div className="flex items-center gap-3">
              <span className="font-display font-extrabold text-sm md:text-base text-[#7C3AED] dark:text-[#38BDF8] tracking-wider">
                ({projectNumber})
              </span>
              <span className="h-px w-8 bg-[#101014]/20 dark:bg-white/20" />
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-[#101014]/60 dark:text-[#F5F5FA]/60">
                CASE STUDY
              </span>
            </div>

            {/* Oversized Title with Hover Arrow */}
            <h3 className="group/title font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#101014] dark:text-[#F5F5FA] leading-[1.1]">
              {liveLink ? (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-2 hover:text-[#7C3AED] dark:hover:text-[#38BDF8] transition-colors"
                >
                  <span>{title}</span>
                  <ArrowUpRight className="inline-block w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 ease-out group-hover/title:translate-x-1.5 group-hover/title:-translate-y-1.5 text-[#FF4D6D]" />
                </a>
              ) : (
                title
              )}
            </h3>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#FFFBF5] text-[#101014] border border-[#101014] shadow-[2px_2px_0_#101014] hover:shadow-[3px_3px_0_#7C3AED] hover:border-[#7C3AED] dark:bg-[#15151E] dark:text-[#F5F5FA] dark:border-white/15 dark:shadow-[2px_2px_0_#000000] dark:hover:border-[#38BDF8] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Link */}
          {liveLink && (
            <div className="pt-4">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm bg-[#101014] text-[#FFFBF5] border-2 border-[#101014] shadow-[4px_4px_0_#7C3AED] hover:shadow-[6px_6px_0_#FF4D6D] hover:bg-[#7C3AED] hover:border-[#7C3AED] dark:bg-white/10 dark:text-[#F5F5FA] dark:border-white/20 dark:shadow-[4px_4px_0_#7C3AED] dark:hover:bg-[#7C3AED] dark:hover:border-[#7C3AED] transition-all group/btn"
              >
                <span>Explore Live Product</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </a>
            </div>
          )}
        </div>

        {/* Narrative Details (Challenge, Solution, Impact) */}
        <div className="flex-1 flex flex-col justify-center space-y-5 bg-[#FFFBF5]/80 dark:bg-[#0A0A0F]/80 p-5 md:p-8 rounded-xl border border-[#101014]/15 dark:border-white/10 transition-colors">
          {/* Challenge */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#FF4D6D]">
              <Target className="w-4 h-4" />
              <span>The Challenge</span>
            </div>
            <p className="text-sm md:text-base text-[#101014]/80 dark:text-[#F5F5FA]/80 leading-relaxed">
              {challenge}
            </p>
          </div>

          <div className="h-px bg-[#101014]/10 dark:bg-white/10" />

          {/* Solution */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#7C3AED] dark:text-[#38BDF8]">
              <Lightbulb className="w-4 h-4" />
              <span>The Engineering Solution</span>
            </div>
            <p className="text-sm md:text-base text-[#101014]/80 dark:text-[#F5F5FA]/80 leading-relaxed">
              {solution}
            </p>
          </div>

          <div className="h-px bg-[#101014]/10 dark:bg-white/10" />

          {/* Impact */}
          <div className="space-y-1.5 bg-[#FFB020]/10 dark:bg-[#FFB020]/15 p-3.5 rounded-lg border border-[#FFB020]/30 dark:border-[#FFB020]/40 transition-colors">
            <div className="flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#FFB020]">
              <CheckCircle2 className="w-4 h-4 text-[#FFB020]" />
              <span>Measurable Impact</span>
            </div>
            <p className="text-sm md:text-base text-[#101014] dark:text-[#F5F5FA] font-medium leading-relaxed">
              {impact}
            </p>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}