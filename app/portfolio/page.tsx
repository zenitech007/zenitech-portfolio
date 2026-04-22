'use client'

import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import SpotlightCard from '@/components/SpotlightCard'
import BackgroundGrid from '@/components/BackgroundGrid'
import { projects } from '@/data/projects'
import ScrollToTop from '@/components/ScrollToTop'

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

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <SpotlightCard>
                <ProjectCard
                  title={project.title}
                  liveLink={project.liveLink}
                  techStack={project.techStack}
                  challenge={project.challenge}
                  solution={project.solution}
                  impact={project.impact}
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </main>
  )
}