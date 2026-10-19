'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MessageCircle, Sparkles } from 'lucide-react';

import { projects } from '@/data/projects';
import {
  FloatingBlob,
  Navbar,
  Hero,
  FeatureStrip,
  ProjectCard,
  CollabCard,
  StatusCard,
  Testimonial,
  Footer,
  ClayButton,
  ClayCard,
} from '@/components/clay';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll for the navbar pill
  useEffect(() => {
    const sectionIds = ['home', 'projects', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Card color cycle matching specification:
  // Card 1: lavender (featured, 2 cols)
  // Card 2: mint
  // Card 3: sunny
  // Card 4: pink-soft
  // Card 5: cream
  const bentoColors: Array<'lavender' | 'mint' | 'sunny' | 'pink-soft' | 'cream'> = [
    'lavender',
    'mint',
    'sunny',
    'pink-soft',
    'cream',
  ];

  return (
    <div className="relative min-h-screen bg-[#FCEFDD] text-[#4B2E25] font-sans overflow-x-hidden selection:bg-[#B49CF0] selection:text-[#4B2E25]">
      {/* 1. Ambient Floating 3D Clay Blobs */}
      <FloatingBlob />

      {/* 2. Floating Clay Navigation Bar */}
      <Navbar activeSection={activeSection} />

      <main className="relative z-10 space-y-12 sm:space-y-20 lg:space-y-28">
        {/* 3. Hero Section (3-line embossed headline, heart, calendar, 3D character) */}
        <Hero />

        {/* 4. 4-Up Feature Strip inside wide cream clay card */}
        <FeatureStrip />

        {/* 5. Featured Projects Bento Grid */}
        <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="font-heading font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-[#FFF6E8] text-[#4B2E25] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_6px_rgba(75,46,37,0.06)] inline-block mb-3">
                ✦ Selected Works
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#4B2E25] tracking-tight clay-emboss-brown leading-[1.05]">
                Featured Projects
              </h2>
            </div>
            <p className="text-base sm:text-lg text-[#6B4A3E] max-w-md font-semibold">
              Tactile, high-performance web applications and AI systems crafted with obsessive attention to detail.
            </p>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.slice(0, 5).map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                variant={bentoColors[idx % bentoColors.length]}
                featured={idx === 0}
                index={idx}
              />
            ))}
          </div>

          {/* Link to view all 9 projects in /portfolio */}
          <div className="mt-10 sm:mt-12 flex justify-center">
            <ClayButton
              variant="cream"
              href="/portfolio"
              className="!px-8 !py-4 !text-base sm:!text-lg gap-3 font-bold shadow-lg"
              ariaLabel="View all 9 production projects"
            >
              <span>Explore All {projects.length} Case Studies</span>
              <div className="clay-arrow-btn w-8 h-8 ml-1">
                <ArrowRight className="w-4 h-4 text-[#4B2E25]" />
              </div>
            </ClayButton>
          </div>
        </section>

        {/* 6. Two-Card Row (CollabCard + StatusCard) */}
        <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left: Lavender "Let's Work Together" Card with 3 connected avatars (8 cols) */}
            <div className="lg:col-span-7 flex flex-col">
              <CollabCard />
            </div>

            {/* Right: Mint "Open to Opportunities" Status Card with smiling cloud (5 cols) */}
            <div className="lg:col-span-5 flex flex-col">
              <StatusCard />
            </div>
          </div>
        </section>

        {/* 7. Testimonial Card with Peeking Clay Unicorn Mascot */}
        <Testimonial />

        {/* 8. Big Clay Contact Card Section */}
        <section id="contact" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <ClayCard variant="cream" className="p-8 sm:p-14 md:p-16 text-center flex flex-col items-center relative overflow-hidden">
            {/* Clay badge */}
            <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B49CF0]/30 text-[#4B2E25] font-heading font-bold text-xs uppercase tracking-wider shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
              <Sparkles className="w-3.5 h-3.5 text-[#F2508A]" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-[#4B2E25] tracking-tight clay-emboss-brown max-w-3xl leading-[1.08] mb-4">
              Have an Idea? <br />
              Let&apos;s Make It Real.
            </h2>

            <p className="text-base sm:text-lg text-[#6B4A3E] font-semibold max-w-xl mb-8 leading-relaxed">
              Available for senior frontend engineering roles, AI system integrations, and custom SaaS platforms. Drop a line and let&apos;s chat.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ClayButton
                variant="pink"
                href="mailto:zenitech007@gmail.com"
                className="!px-8 !py-4 !text-base sm:!text-lg gap-2.5 font-bold shadow-lg"
                ariaLabel="Send email to zenitech007@gmail.com"
              >
                <Mail className="w-5 h-5 text-[#FFF6E8]" />
                <span>Email Me Directly</span>
              </ClayButton>

              <ClayButton
                variant="lavender"
                href="https://wa.me/2348102203238"
                className="!px-8 !py-4 !text-base sm:!text-lg gap-2.5 font-bold shadow-lg"
                ariaLabel="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#4B2E25]" />
                <span>WhatsApp Chat</span>
              </ClayButton>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-bold text-[#6B4A3E] bg-[#FFF6E8] px-4 py-2 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_2px_4px_rgba(75,46,37,0.06)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#52A662] shadow-[0_0_6px_#52A662]" />
              <span>Average response time: &lt; 4 hours</span>
            </div>
          </ClayCard>
        </section>
      </main>

      {/* 9. Floating Cream Clay Footer */}
      <Footer />
    </div>
  );
}