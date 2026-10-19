'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Mail,
  MessageCircle,
  Palette,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { projects } from '@/data/projects';
import FilmGrain from '@/components/FilmGrain';
import GradientBlobs from '@/components/GradientBlobs';
import GradientText from '@/components/GradientText';
import MagneticButton from '@/components/MagneticButton';
import Marquee from '@/components/Marquee';
import Reveal, { CUBIC_EASE } from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import CountUp from '@/components/CountUp';
import ScrollToTop from '@/components/ScrollToTop';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Shrink navbar slightly on scroll
  const navPadding = useTransform(scrollY, [0, 80], ['1.25rem', '0.75rem']);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const skillCategories = [
    {
      title: 'Frontend & Architecture',
      icon: Code2,
      color: 'violet',
      skills: [
        'React 19',
        'TypeScript',
        'Next.js 16 (App Router)',
        'Tailwind CSS v4',
        'Framer Motion v12',
        'Vite',
        'Shadcn UI',
        'State Management',
      ],
    },
    {
      title: 'Backend & Systems',
      icon: Terminal,
      color: 'coral',
      skills: [
        'FastAPI',
        'Python',
        'Node.js',
        'Firebase / Firestore',
        'REST APIs',
        'Paystack & Stripe',
        'Auth & Security',
        'Edge Functions',
      ],
    },
    {
      title: 'AI & Multimodal Systems',
      icon: Cpu,
      color: 'amber',
      skills: [
        'Google Gemini API',
        'Prompt Architecture',
        'Multimodal Audio/Text',
        'Document Synthesis',
        'AI Flashcard Engines',
        'Local File Processing',
      ],
    },
    {
      title: 'UI/UX & Creative Direction',
      icon: Palette,
      color: 'sky',
      skills: [
        'Design Systems',
        'Micro-Interactions',
        'Responsive Layouts',
        'Conversion Strategy',
        'A11y / WCAG',
        'Neo-Brutalist Styling',
      ],
    },
  ];

  const experienceItems = [
    {
      period: '2023 — PRESENT',
      role: 'Founder & Lead Creative Engineer',
      company: 'ZeniTech',
      description:
        'Architecting high-performance web applications, scalable SaaS systems, and bespoke AI tools for enterprise founders and ambitious startups. Specializing in conversion-focused UX and micro-interactions.',
      badge: 'Current Role',
      badgeColor: 'violet' as const,
    },
    {
      period: '2022 — 2023',
      role: 'Full-Stack & Frontend Engineer',
      company: 'Independent Consulting',
      description:
        'Engineered responsive web storefronts, single-page applications, and secure client-side utilities. Integrated payment gateways (Paystack), real-time databases, and interactive 3D/animation libraries.',
      badge: 'Consulting',
      badgeColor: 'coral' as const,
    },
    {
      period: '2021 — 2022',
      role: 'Frontend UI/UX Specialist',
      company: 'Web & EdTech Products',
      description:
        'Designed component libraries, established design tokens, and developed accessible user flows for educational and commercial web platforms.',
      badge: 'Engineering',
      badgeColor: 'amber' as const,
    },
  ];

  return (
    <div className="relative min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans selection:bg-[#7C3AED] selection:text-[#FFFBF5] transition-colors duration-250">
      {/* Background Ambience: Drift Blobs & Film Grain */}
      <GradientBlobs />
      <FilmGrain />

      {/* 1. STICKY NAV */}
      <motion.header
        style={{
          paddingTop: shouldReduceMotion ? '1rem' : navPadding,
          paddingBottom: shouldReduceMotion ? '1rem' : navPadding,
        }}
        className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#FFFBF5]/85 dark:bg-[#0A0A0F]/85 border-b border-[#101014]/15 dark:border-white/10 transition-colors duration-250"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-2xl font-black tracking-tight text-[#101014] dark:text-[#F5F5FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
          >
            <span>Zeni</span>
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#FF4D6D] bg-clip-text text-transparent group-hover:from-[#FF4D6D] group-hover:to-[#FFB020] transition-all">
              Tech
            </span>
            <span className="text-[#FF4D6D] text-3xl leading-none">.</span>
          </Link>

          {/* Pill Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101014]/5 dark:bg-white/5 p-1.5 rounded-full border border-[#101014]/10 dark:border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredNav(link.label)}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative px-4 py-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#101014]/80 dark:text-[#F5F5FA]/80 hover:text-[#101014] dark:hover:text-[#F5F5FA] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
              >
                {hoveredNav === link.label && (
                  <motion.span
                    layoutId="nav-hover-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#FFFBF5] dark:bg-[#15151E] rounded-full border border-[#101014] dark:border-white/20 shadow-[2px_2px_0_#101014] dark:shadow-[2px_2px_0_#000000] -z-10"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle & Hire Me Magnetic CTA */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <MagneticButton
              variant="gradient"
              href="#contact"
              className="!px-5 !py-2.5 !text-xs uppercase tracking-wider"
              ariaLabel="Jump to contact section"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </MagneticButton>
          </div>
        </div>
      </motion.header>

      <main>
        {/* 2. HERO SECTION */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-28 md:pb-32">
          {/* Availability Badge */}
          <Reveal direction="down" delay={0.05} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/20 rounded-full shadow-[4px_4px_0_#101014] dark:shadow-[4px_4px_0_#000000] rotate-[-1deg] hover:rotate-0 transition-transform">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
              </span>
              <span className="font-display font-extrabold text-xs uppercase tracking-widest text-[#101014] dark:text-[#F5F5FA]">
                Available for Q2/Q3 Projects
              </span>
              <span className="hidden sm:inline text-xs text-[#101014]/50 dark:text-white/40 font-mono">✦</span>
              <span className="hidden sm:inline font-mono text-xs text-[#101014]/70 dark:text-[#F5F5FA]/70">
                Olanrewaju Sorunke
              </span>
            </div>
          </Reveal>

          {/* Giant Staggered Line-by-Line Text Reveal (Clip-Path Mask) */}
          <div className="space-y-1 sm:space-y-2 md:space-y-3 max-w-6xl">
            {/* Line 1 */}
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: '115%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.15, ease: CUBIC_EASE }}
              >
                <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-[-0.04em] leading-[0.95] text-[#101014] dark:text-[#F5F5FA] uppercase">
                  BUILDING <span className="font-light italic text-[#7C3AED] dark:text-[#38BDF8]">BOLD</span>
                </h1>
              </motion.div>
            </div>

            {/* Line 2 */}
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: '115%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.3, ease: CUBIC_EASE }}
              >
                <div className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] tracking-[-0.04em] leading-[0.95] text-[#101014] dark:text-[#F5F5FA] uppercase flex flex-wrap items-baseline gap-x-4">
                  <span>AI-POWERED</span>
                  <GradientText className="font-black">WEB SYSTEMS</GradientText>
                </div>
              </motion.div>
            </div>

            {/* Line 3 */}
            <div className="overflow-hidden">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: '115%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.85, delay: 0.45, ease: CUBIC_EASE }}
              >
                <div className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[6.25rem] tracking-[-0.03em] leading-[0.95] text-[#101014]/90 dark:text-[#F5F5FA]/90 uppercase">
                  THAT SCALE <span className="font-mono text-2xl sm:text-4xl text-[#FF4D6D]">✦</span> CONVERT
                </div>
              </motion.div>
            </div>
          </div>

          {/* Short Bio */}
          <Reveal direction="up" delay={0.6} className="mt-8 md:mt-12 max-w-2xl">
            <p className="text-lg sm:text-xl text-[#101014]/80 dark:text-[#F5F5FA]/80 leading-relaxed font-normal">
              I&apos;m a senior creative developer, frontend engineer, and AI integration specialist. Founder of{' '}
              <strong className="font-bold text-[#101014] dark:text-[#F5F5FA] underline decoration-[#7C3AED] decoration-2">
                ZeniTech
              </strong>
              , engineering category-defining SaaS platforms, high-performance web systems, and delightful digital experiences.
            </p>
          </Reveal>

          {/* TWO Magnetic CTA Buttons */}
          <Reveal direction="up" delay={0.75} className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton variant="gradient" href="#work" ariaLabel="View portfolio projects">
              <span>View Projects</span>
              <ArrowUpRight className="w-5 h-5" />
            </MagneticButton>

            <MagneticButton variant="outline" href="#contact" ariaLabel="Contact me directly">
              <span>Get In Touch</span>
              <MessageCircle className="w-4 h-4 text-[#7C3AED] dark:text-[#38BDF8]" />
            </MagneticButton>
          </Reveal>
        </section>

        {/* Marquee Strip */}
        <div className="relative z-10 w-full mb-20 md:mb-32">
          <Marquee />
        </div>

        {/* 3. ABOUT + STATS SECTION */}
        <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            badge="// ABOUT THE CRAFT"
            badgeColor="violet"
            title="Engineering with"
            highlight="Taste & Velocity"
            subtitle="Bridging the gap between award-winning creative design and enterprise-grade software engineering."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Editorial Bio Block */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal direction="up" delay={0.1}>
                <div className="p-8 md:p-10 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[6px_6px_0_#101014] dark:shadow-[6px_6px_0_#000000] transition-colors">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-[#101014] dark:text-[#F5F5FA] tracking-tight mb-4">
                    Obsessed with micro-interactions, conversion psychology, and resilient architecture.
                  </h3>
                  <p className="text-[#101014]/80 dark:text-[#F5F5FA]/80 text-base md:text-lg leading-relaxed mb-4">
                    I treat every digital storefront and web application as a high-stakes conversion vehicle. My work combines crisp typography, buttery 60fps animations, robust type-safety with TypeScript, and seamless AI integrations with Google Gemini and modern multimodal models.
                  </p>
                  <p className="text-[#101014]/80 dark:text-[#F5F5FA]/80 text-base md:text-lg leading-relaxed">
                    Whether you are an early-stage startup looking to validate an MVP or an established brand demanding an unforgettable digital presence, I architect solutions that stop people from scrolling and drive measurable results.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Neo-brutalist Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {/* Stat 1 */}
              <Reveal direction="left" delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[5px_5px_0_#7C3AED] dark:shadow-[5px_5px_0_#000000] hover:shadow-[7px_7px_0_#101014] dark:hover:shadow-[7px_7px_0_#7C3AED] transition-all">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#101014] dark:text-[#F5F5FA] tracking-tight">
                      <CountUp to={3} suffix="+" />
                    </span>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-[#7C3AED] bg-[#7C3AED]/10 px-2.5 py-1 rounded-md border border-[#7C3AED]/30">
                      Experience
                    </span>
                  </div>
                  <p className="mt-2 text-sm md:text-base font-medium text-[#101014]/70 dark:text-[#F5F5FA]/70">
                    Years of dedicated frontend & full-stack development craft.
                  </p>
                </div>
              </Reveal>

              {/* Stat 2 */}
              <Reveal direction="left" delay={0.3}>
                <div className="p-6 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[5px_5px_0_#FF4D6D] dark:shadow-[5px_5px_0_#000000] hover:shadow-[7px_7px_0_#101014] dark:hover:shadow-[7px_7px_0_#FF4D6D] transition-all">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#101014] dark:text-[#F5F5FA] tracking-tight">
                      <CountUp to={projects.length} suffix="+" />
                    </span>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-[#FF4D6D] bg-[#FF4D6D]/10 px-2.5 py-1 rounded-md border border-[#FF4D6D]/30">
                      Shipped
                    </span>
                  </div>
                  <p className="mt-2 text-sm md:text-base font-medium text-[#101014]/70 dark:text-[#F5F5FA]/70">
                    Production web platforms, SaaS utilities, and commercial storefronts.
                  </p>
                </div>
              </Reveal>

              {/* Stat 3 */}
              <Reveal direction="left" delay={0.4}>
                <div className="p-6 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[5px_5px_0_#FFB020] dark:shadow-[5px_5px_0_#000000] hover:shadow-[7px_7px_0_#101014] dark:hover:shadow-[7px_7px_0_#FFB020] transition-all">
                  <div className="flex items-baseline justify-between">
                    <span className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#101014] dark:text-[#F5F5FA] tracking-tight">
                      <CountUp to={15} suffix="+" />
                    </span>
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-[#101014] dark:text-[#FFB020] bg-[#FFB020]/20 px-2.5 py-1 rounded-md border border-[#FFB020]/50">
                      Clients
                    </span>
                  </div>
                  <p className="mt-2 text-sm md:text-base font-medium text-[#101014]/70 dark:text-[#F5F5FA]/70">
                    Happy founders, businesses, and global clients served.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4. SKILLS SECTION */}
        <section id="skills" className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            badge="// TECH STACK & ARSENAL"
            badgeColor="amber"
            title="Modern Tools,"
            highlight="Zero Compromises"
            subtitle="A curated toolkit built for lightning-fast delivery, bulletproof type safety, and immersive motion design."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, catIdx) => {
              const Icon = cat.icon;
              return (
                <Reveal key={cat.title} direction="up" delay={catIdx * 0.1}>
                  <div className="h-full p-8 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[6px_6px_0_#101014] dark:shadow-[6px_6px_0_#000000] hover:shadow-[8px_8px_0_#7C3AED] transition-all">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 rounded-xl border-2 border-[#101014] dark:border-white/15 bg-[#FFFBF5] dark:bg-[#0A0A0F] shadow-[3px_3px_0_#101014] dark:shadow-[3px_3px_0_#000000]">
                        <Icon className="w-5 h-5 text-[#101014] dark:text-[#F5F5FA]" />
                      </div>
                      <h3 className="font-display font-extrabold text-xl text-[#101014] dark:text-[#F5F5FA] tracking-tight">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Chip Cloud with Stagger & Spring */}
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill, sIdx) => (
                        <motion.span
                          key={skill}
                          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: catIdx * 0.1 + sIdx * 0.04,
                            type: 'spring',
                            stiffness: 260,
                            damping: 18,
                          }}
                          className="px-3.5 py-1.5 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#FFFBF5] text-[#101014] border-2 border-[#101014] shadow-[3px_3px_0_#101014] hover:shadow-[5px_5px_0_#7C3AED] hover:-translate-y-0.5 hover:bg-[#101014] hover:text-[#FFFBF5] dark:bg-[#0A0A0F] dark:text-[#F5F5FA] dark:border-white/15 dark:shadow-[3px_3px_0_#000000] dark:hover:bg-white/10 dark:hover:border-[#38BDF8] transition-all cursor-default select-none"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* 5. FEATURED WORK (ALTERNATING EDITORIAL ROWS) */}
        <section id="work" className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="// CURATED PORTFOLIO"
              badgeColor="coral"
              title="Selected"
              highlight="Production Work"
              subtitle="Real products solving real problems. From custom AI research engines to high-converting architectural platforms."
              className="!mb-0"
            />
            <Reveal direction="left" delay={0.2}>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-display font-bold text-sm bg-[#FFFBF5] text-[#101014] border-2 border-[#101014] shadow-[4px_4px_0_#101014] hover:shadow-[6px_6px_0_#FF4D6D] hover:bg-[#101014] hover:text-[#FFFBF5] dark:bg-[#15151E] dark:text-[#F5F5FA] dark:border-white/20 dark:shadow-[4px_4px_0_#000000] dark:hover:bg-[#20202E] dark:hover:shadow-[6px_6px_0_#FF4D6D] transition-all"
              >
                <span>Browse All Work ({projects.length})</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Reveal>
          </div>

          {/* Alternating Editorial Rows */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <Reveal key={project.title} direction="up" delay={0.15} margin="-60px">
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
        </section>

        {/* 6. EXPERIENCE TIMELINE */}
        <section id="experience" className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
          <SectionHeading
            badge="// TRACK RECORD"
            badgeColor="sky"
            title="Proven"
            highlight="Professional Journey"
            subtitle="A chronological trace of leadership, software architecture, and product impact."
            align="center"
          />

          <div className="relative max-w-4xl mx-auto mt-16">
            {/* Center Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#101014]/20 dark:bg-white/20 -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {experienceItems.map((item, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={item.role}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Timeline Node Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#FFFBF5] dark:bg-[#15151E] border-3 border-[#101014] dark:border-white/20 shadow-[2px_2px_0_#7C3AED] z-20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                      <Reveal direction={isEven ? 'left' : 'right'} delay={idx * 0.15}>
                        <div className="p-6 md:p-8 rounded-2xl bg-[#FFFBF5] dark:bg-[#15151E] border-2 border-[#101014] dark:border-white/15 shadow-[6px_6px_0_#101014] dark:shadow-[6px_6px_0_#000000] hover:shadow-[8px_8px_0_#FF4D6D] transition-all">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className="font-mono text-xs font-bold text-[#7C3AED] dark:text-[#38BDF8] uppercase tracking-wider">
                              {item.period}
                            </span>
                            <span className="px-2.5 py-0.5 text-xs font-display font-bold uppercase tracking-wider bg-[#FFB020]/20 text-[#101014] dark:text-[#FFB020] rounded-full border border-[#FFB020]/40">
                              {item.badge}
                            </span>
                          </div>

                          <h3 className="font-display font-extrabold text-xl md:text-2xl text-[#101014] dark:text-[#F5F5FA] tracking-tight mb-1">
                            {item.role}
                          </h3>
                          <div className="font-display font-semibold text-sm text-[#FF4D6D] mb-4">
                            {item.company}
                          </div>

                          <p className="text-sm md:text-base text-[#101014]/80 dark:text-[#F5F5FA]/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </Reveal>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. BIG CONTACT CTA */}
        <section id="contact" className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
          <Reveal direction="up" delay={0.1}>
            <div className="relative p-10 md:p-16 lg:p-24 rounded-3xl bg-[#FFFBF5] dark:bg-[#15151E] border-3 border-[#101014] dark:border-white/20 shadow-[10px_10px_0_#101014] dark:shadow-[10px_10px_0_#000000] overflow-hidden text-center flex flex-col items-center transition-colors">
              {/* Decorative Sticker Badge */}
              <div className="mb-6 inline-block px-4 py-1.5 text-xs font-display font-extrabold uppercase tracking-widest bg-[#FFB020] text-[#101014] border-2 border-[#101014] dark:border-white/20 rounded-md shadow-[3px_3px_0_#101014] dark:shadow-[3px_3px_0_#000000] rotate-[-2deg]">
                LET&apos;S TALK
              </div>

              {/* Huge Headline with GradientText */}
              <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[1.05] text-[#101014] dark:text-[#F5F5FA] uppercase max-w-4xl">
                LET&apos;S BUILD <br />
                <GradientText>SOMETHING GREAT</GradientText>
              </h2>

              <p className="mt-6 text-base md:text-xl text-[#101014]/70 dark:text-[#F5F5FA]/70 max-w-2xl leading-relaxed">
                Whether you need an enterprise AI application, a secure utility tool, or a high-converting e-commerce storefront, ZeniTech has you covered. Let&apos;s discuss your next project.
              </p>

              {/* CTAs: Magnetic Gradient + Outline */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <MagneticButton
                  variant="gradient"
                  href="mailto:zenitech007@gmail.com"
                  ariaLabel="Send email to zenitech007@gmail.com"
                  className="!px-8 !py-4 !text-base"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Me Directly</span>
                </MagneticButton>

                <MagneticButton
                  variant="outline"
                  href="https://wa.me/2348102203238"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Chat on WhatsApp"
                  className="!px-8 !py-4 !text-base"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>WhatsApp Chat</span>
                </MagneticButton>
              </div>

              {/* Response Time Guarantee */}
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-[#101014]/60 dark:text-[#F5F5FA]/60">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>Typical response time: under 4 hours</span>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* 8. FOOTER */}
      <footer className="relative z-10 w-full border-t-2 border-[#101014] dark:border-white/10 bg-[#FFFBF5] dark:bg-[#0A0A0F] py-12 px-6 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <Link
              href="/"
              className="font-display text-xl font-black tracking-tight text-[#101014] dark:text-[#F5F5FA]"
            >
              <span>Zeni</span>
              <span className="text-[#7C3AED] dark:text-[#38BDF8]">Tech</span>.
            </Link>
            <span className="hidden sm:inline text-[#101014]/20 dark:text-white/20">|</span>
            <p className="text-xs text-[#101014]/60 dark:text-[#F5F5FA]/60 font-mono">
              © {new Date().getFullYear()} Olanrewaju Sorunke. Designed with Bright Editorial Pop taste.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:zenitech007@gmail.com"
              className="text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#7C3AED] dark:hover:text-[#38BDF8] transition-colors"
            >
              Email
            </a>
            <span className="text-[#101014]/30 dark:text-white/30">✦</span>
            <a
              href="https://wa.me/2348102203238"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#FF4D6D] transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-[#101014]/30 dark:text-white/30">✦</span>
            <Link
              href="/portfolio"
              className="text-xs font-display font-bold uppercase tracking-wider text-[#101014] dark:text-[#F5F5FA] hover:text-[#FFB020] transition-colors"
            >
              All Projects
            </Link>
          </div>
        </div>
      </footer>

      {/* 9. FLOATING SCROLL TO TOP */}
      <ScrollToTop />
    </div>
  );
}