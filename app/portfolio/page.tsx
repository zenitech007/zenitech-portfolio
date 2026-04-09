'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import SpotlightCard from '@/components/SpotlightCard'
import BackgroundGrid from '@/components/BackgroundGrid'

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30 overflow-hidden">

      {/* Advanced UI Background */}
      <BackgroundGrid />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-16 text-zinc-100">
          Featured Work
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Project 1: Aura Skincare */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Aura Skincare E-Commerce Platform"
                liveLink="https://skincare-landing-seven.vercel.app/"
                techStack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS v4",
                  "Framer Motion",
                  "Custom UI/UX"
                ]}
                challenge="A premium botanical skincare brand needed a high-end digital storefront to establish its identity in the competitive 'clean beauty' market. The goal was to move beyond generic templates and create a highly immersive, trust-building web experience that visually communicates the brand’s pure, organic nature while seamlessly guiding users toward product exploration and conversion."
                solution="Engineered a custom, highly responsive e-commerce landing page from scratch leveraging Next.js and TypeScript. Implemented Tailwind CSS v4 to establish a luxurious, modern color palette and typography system. To elevate the user experience, I integrated Framer Motion, designing buttery-smooth scroll animations, dynamic asymmetrical grids, and an infinite-looping testimonial ticker. The architecture was built completely modularly, laying a scalable foundation for future product pages, blog routing, and full checkout integration."
                impact="Delivered a visually striking, conversion-optimized storefront foundation that instantly establishes premium brand credibility. The modern, component-driven architecture ensures lightning-fast performance and provides a seamless, scalable pathway for the brand's upcoming full e-commerce launch."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 2: SWITCH Architecture Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <SpotlightCard>
              <ProjectCard
                title="SWITCH Architecture Portfolio"
                liveLink="https://switch-architect.vercel.app/"
                techStack={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Custom Blog Engine",
                  "Dynamic Routing",
                  "Vercel Deployment"
                ]}
                challenge="Standard architectural portfolios often look like static PDF resumes. The goal was to build a premium, high-tech digital presence for an Architectural Engineer that didn't just display past work, but actively positioned them as an industry authority in modern structure and AI workflows."
                solution="Engineered a highly immersive web platform from scratch using Next.js and TypeScript, styled as a secure 'Operative Dossier.' Crafted a custom UI featuring cinematic video backgrounds, glassmorphism, and staggered animations. Built a dynamic 'Field Reports' markdown blog and a dedicated 'AI Training Hub' designed to sell specialized consulting sessions and masterclasses."
                impact="Transformed a basic digital resume into a revenue-generating tech platform. The high-end dark mode aesthetic establishes immediate credibility, while the built-in direct WhatsApp routing streamlines high-ticket client acquisition."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 3: Social-UI Portfolio Template */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Social-UI Portfolio Template"
                liveLink="https://arch-portfolio-eight.vercel.app/"
                techStack={[
                  "Next.js",
                  "Framer Motion",
                  "Tailwind CSS",
                  "React Three Fiber"
                ]}
                challenge="Standard developer portfolios often sacrifice intuitive navigation for flashy, overly complex designs, leaving potential clients confused and leading to high bounce rates and lost leads."
                solution="Architected a premium portfolio template that maps high-end SaaS aesthetics—like frosted glassmorphism and 3D WebGL backgrounds—onto a universally familiar social media profile layout. Integrated dynamic, swipeable case-study galleries and engineered a custom interactive project estimator to capture leads directly on the page."
                impact="Delivered a plug-and-play, conversion-ready template that instantly builds user trust through a familiar UX, while simultaneously demonstrating top-tier frontend engineering and interactive UI/UX design."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 4: EchoPix */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <SpotlightCard>
              <ProjectCard
                title="EchoPix"
                liveLink="https://echopix.vercel.app/"
                techStack={[
                  "Next.js",
                  "Tailwind CSS",
                  "AI Integration"
                ]}
                challenge="Learners and professionals often lack the time to manually condense lengthy documents, notes, and images into effective study materials. Traditional study prep is incredibly time-consuming, leading to inefficient learning and information overload."
                solution="Architected an AI-powered educational platform featuring an AI Study Deck that instantly generates interactive flashcards from any uploaded text or document. Built an integrated Audio Studio that seamlessly transforms static notes and images into high-quality, listenable audio summaries for on-the-go learning."
                impact="Delivered a multimodal, high-performance SaaS utility that drastically reduces study preparation time. By catering to both auditory and visual learning styles, the application transforms passive reading into an engaging and highly accessible learning experience."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 5: Safe Convert Tool */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Safe Convert Tool"
                liveLink="https://safe-convert-seven.vercel.app"
                techStack={[
                  "Next.js (App Router)",
                  "Tailwind CSS",
                  "100% Client-Side Logic"
                ]}
                challenge="Most free online tools require uploading sensitive files to external servers, creating major privacy risks and slow processing times."
                solution="Developed a privacy-first utility that converts any image format to JPG entirely within the user's browser. Architected the application to guarantee zero database uploads, ensuring files never leave the device."
                impact="Delivered a high-performance, highly secure SaaS utility that completely bypasses cloud-based processing for maximum user privacy."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 6: Barbie Hairs E-Commerce */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75 }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Barbie Hairs E-Commerce"
                liveLink="https://barbie-hairs.web.app/"
                techStack={[
                  "Next.js",
                  "TypeScript",
                  "Custom UI/UX",
                  "Responsive Layout"
                ]}
                challenge="A natural hair care brand needed a premium, high-converting digital storefront to showcase its herbal products and capture customer interest ahead of launch."
                solution="Engineered a high-end e-commerce landing page from scratch leveraging Next.js and TypeScript. Crafted a custom UI that visually communicates the brand’s '100% natural' identity with dynamic testimonial sections and email capture."
                impact="Delivered a scalable, conversion-ready e-commerce foundation that establishes immediate brand credibility and trust."
              />
            </SpotlightCard>
          </motion.div>

        </div>

      </section>

    </main>
  )
}