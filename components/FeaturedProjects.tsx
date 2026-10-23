'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion';
import SectionLabel from '@/components/ui/SectionLabel';
import CategoryArt, { CATEGORY_ACCENT } from '@/components/projects/CategoryArt';
import {
  featuredProjects,
  PROJECT_CATEGORIES,
  type FeaturedProject,
  type ProjectCategory,
} from '@/src/content/projects';
import { projects as archiveProjects } from '@/data/projects';

type Filter = 'all' | ProjectCategory;

const CATEGORY_LABEL = Object.fromEntries(PROJECT_CATEGORIES.map((c) => [c.id, c.label])) as Record<
  ProjectCategory,
  string
>;

/* ───────────────────────────── Project card ───────────────────────────── */

// forwardRef so AnimatePresence (popLayout) can measure the card while it animates out
const ProjectCard = React.forwardRef<HTMLDivElement, { project: FeaturedProject; order: number }>(
  function ProjectCard({ project, order }, ref) {
    const reduceMotion = useReducedMotion();
    const [imageError, setImageError] = useState(false);
    const accent = CATEGORY_ACCENT[project.category];
    const hasImage = Boolean(project.image) && !imageError;

    // Cursor position inside the card (0–1) drives a gentle 3D tilt and a soft spotlight
    const mx = useMotionValue(0.5);
    const my = useMotionValue(0.5);
    const rotateX = useSpring(useTransform(my, [0, 1], [5, -5]), { stiffness: 220, damping: 22 });
    const rotateY = useSpring(useTransform(mx, [0, 1], [-5, 5]), { stiffness: 220, damping: 22 });
    const spotX = useTransform(mx, (v) => `${v * 100}%`);
    const spotY = useTransform(my, (v) => `${v * 100}%`);
    const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX} ${spotY}, ${accent}2e, transparent 70%)`;

    const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    };
    const onMouseLeave = () => {
      mx.set(0.5);
      my.set(0.5);
    };

    return (
      <motion.div
        ref={ref}
        layout={reduceMotion ? false : true}
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.92, y: reduceMotion ? 0 : 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.92 }}
        transition={{
          layout: { type: 'spring', stiffness: 280, damping: 30 },
          opacity: { duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : order * 0.06 },
          scale: { type: 'spring', stiffness: 260, damping: 26, delay: reduceMotion ? 0 : order * 0.06 },
          y: { type: 'spring', stiffness: 260, damping: 26, delay: reduceMotion ? 0 : order * 0.06 },
        }}
        className="h-full"
      >
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#12121C] transition-shadow duration-300 hover:shadow-[0_18px_50px_-18px_rgba(124,58,237,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          aria-label={`View live project: ${project.title} (${project.subtitle})`}
        >
          {/* hover border + spotlight */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-30 rounded-2xl border opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            style={{ borderColor: `${accent}66` }}
          />
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />

          {/* ── Cover ── */}
          <div className="relative aspect-[16/10] w-full select-none overflow-hidden bg-[#0d0b18]">
            <CategoryArt category={project.category} variant={project.artVariant ?? 0} />

            {hasImage && (
              <Image
                src={project.image as string}
                alt={`${project.title} screenshot preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="z-10 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                onError={() => setImageError(true)}
              />
            )}

            <div
              className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0A0A10]/85 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* category chip */}
            <span className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-white/10 bg-[#0A0A10]/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-200 backdrop-blur-md">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
                aria-hidden="true"
              />
              {CATEGORY_LABEL[project.category]}
            </span>

            {/* "View live" chip slides in on hover */}
            <span
              className="absolute right-3 top-3 z-20 translate-y-1 rounded-full bg-gradient-to-b from-[#9a80f0] to-[#7b5ce0] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white opacity-0 shadow-[0_0_16px_rgba(123,92,224,0.5)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
              aria-hidden="true"
            >
              View live ↗
            </span>

            {/* tech tags */}
            {project.tags.length > 0 && (
              <div className="pointer-events-none absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-[#0A0A10]/75 px-2 py-0.5 font-mono text-[10px] text-zinc-300 backdrop-blur-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* ── Card body ── */}
          <div className="flex flex-grow flex-col justify-between gap-4 p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-wider text-zinc-400">{project.index}</span>
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-[rgba(167,139,250,0.4)] group-hover:text-[#A78BFA]"
                aria-hidden="true"
              >
                <svg
                  className="h-3.5 w-3.5"
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

            <div className="space-y-1">
              <h3 className="font-sans text-base font-bold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-[#A78BFA] sm:text-lg">
                {project.title}
              </h3>
              <p className="font-sans text-xs text-zinc-500">{project.subtitle}</p>
            </div>
          </div>
        </motion.a>
      </motion.div>
    );
  },
);

/* ───────────────────────────── Section ───────────────────────────── */

export default function FeaturedProjects() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<Filter>('all');
  const gridRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // Cards mount (and play their entrance) the first time the grid scrolls into view
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  if (!featuredProjects || featuredProjects.length === 0) return null;

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: featuredProjects.length },
    ...PROJECT_CATEGORIES.map((c) => ({
      id: c.id as Filter,
      label: c.label,
      count: featuredProjects.filter((p) => p.category === c.id).length,
    })).filter((t) => t.count > 0),
  ];

  const visible = active === 'all' ? featuredProjects : featuredProjects.filter((p) => p.category === active);

  const onTabKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (e.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = tabs.length - 1;
    else return;
    e.preventDefault();
    setActive(tabs[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="work"
      aria-labelledby="featured-projects-heading"
      className="mx-auto max-w-7xl scroll-mt-20 border-b border-white/5 px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* ── Header row: label + view-all link ── */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
        <div>
          <div id="featured-projects-heading">
            <SectionLabel accentText="FEATURED" whiteText="PROJECTS" hasSparkle size="md" />
          </div>
          <p className="mt-3 max-w-xl font-sans text-sm text-zinc-500">
            Pick a category: AI products, storefronts, platforms and tools I&apos;ve built.
          </p>
        </div>

        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-zinc-400 transition-colors hover:text-[#A78BFA]"
        >
          <span>VIEW ALL {archiveProjects.length} PROJECTS</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {/* ── Category tabs ── */}
      <div
        role="tablist"
        aria-label="Filter projects by category"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab, i) => {
          const selected = active === tab.id;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`projects-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="projects-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
              className={`relative shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                selected
                  ? 'border-transparent text-white'
                  : 'border-white/10 text-[#a8a5b8] hover:border-[#A78BFA]/40 hover:text-white'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="projects-tab-pill"
                  className="absolute inset-0 rounded-full border border-[#A78BFA]/50 bg-gradient-to-b from-[#8B5CF6]/35 to-[#7C3AED]/15 shadow-[0_0_22px_rgba(139,92,246,0.4)]"
                  transition={
                    reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }
                  }
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.label}
                <span
                  className={`rounded-full px-1.5 py-px text-[10px] leading-none ${
                    selected ? 'bg-white/20 text-white' : 'bg-white/5 text-zinc-400'
                  }`}
                >
                  {tab.count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Projects grid (cards glide to their new spots when the filter changes) ── */}
      <motion.div
        ref={gridRef}
        id="projects-panel"
        role="tabpanel"
        aria-labelledby={`projects-tab-${active}`}
        layout={reduceMotion ? false : true}
        className="grid min-h-[380px] grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {(gridInView || reduceMotion) &&
            visible.map((project, i) => <ProjectCard key={project.slug} project={project} order={i} />)}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
