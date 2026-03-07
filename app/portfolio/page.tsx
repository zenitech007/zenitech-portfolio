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

          {/* Project 1: Amelia AI Health Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Amelia AI Health Assistant"
                techStack={[
                  "Next.js", 
                  "Python", 
                  "Supabase", 
                  "Prisma",
                  "Localization", 
                  "Push Notifications"
                ]}
                challenge="Patients need accessible, personalized medical guidance in their native dialects, alongside proactive health tracking without navigating clunky medical portals."
                solution="Engineered a context-aware AI that tailors medical advice based on custom user health profiles. Integrated a real-time health monitor, automated notifications, and fully localized the platform for Igbo, Yoruba, Hausa, and Pidgin."
                impact="Delivered a highly accessible, culturally tailored health platform providing proactive, personalized medical support."
              />
            </SpotlightCard>
          </motion.div>

          {/* Project 2: Safe Convert Tool */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
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

          {/* Project 3: Barbie Hairs E-Commerce */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
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