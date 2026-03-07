'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BackgroundGrid from '@/components/BackgroundGrid'
import ProjectCard from '@/components/ProjectCard'
import SpotlightCard from '@/components/SpotlightCard'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden selection:bg-emerald-500/30">

      {/* Advanced UI Background */}
      <BackgroundGrid />

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight">
            Zeni<span className="text-emerald-400">Tech</span>.
          </div>
          <nav className="flex gap-6 text-zinc-400 text-sm font-medium">
            <a href="#work" className="hover:text-zinc-100 transition-colors">Work</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-emerald-400 bg-emerald-400/10 rounded-full w-fit mb-8 border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Hi, I'm Olanrewaju Sorunke
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold max-w-5xl leading-[1.1] tracking-tight text-zinc-100"
        >
          Building modern
          <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
            {" "}AI powered web apps.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed"
        >
          Full-stack developer and founder of ZeniTech, specializing in AI applications, 
          scalable SaaS platforms, and high-performance web systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#work"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-400 text-zinc-950 rounded-full font-semibold hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.25)] hover:shadow-[0_0_30px_rgba(52,211,153,0.4)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-zinc-700 text-zinc-100 rounded-full font-semibold hover:bg-zinc-800 hover:border-zinc-600 transition-all"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 border-t border-zinc-800/50" id="work">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-zinc-100">Featured Work</h2>
          <div className="w-12 h-1 bg-emerald-500 mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SpotlightCard>
              <ProjectCard
                title="Amelia AI Health Assistant"
                liveLink="https://amelia-tan.vercel.app/"
                techStack={["Next.js", "Python", "Supabase", "Prisma", "Localization"]}
                challenge="Patients need accessible, personalized medical guidance in their native dialects, alongside proactive health tracking without navigating clunky medical portals."
                solution="Engineered a context-aware AI that tailors medical advice based on custom user health profiles. Integrated a real-time health monitor, automated notifications, and fully localized the platform for Igbo, Yoruba, Hausa, and Pidgin."
                impact="Delivered a highly accessible, culturally tailored health platform providing proactive, personalized medical support."
              />
            </SpotlightCard>
          </motion.div>

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
                techStack={["Next.js (App Router)", "Tailwind CSS", "100% Client-Side Logic"]}
                challenge="Most free online tools require uploading sensitive files to external servers, creating major privacy risks and slow processing times."
                solution="Developed a privacy-first utility that converts any image format to JPG entirely within the user's browser. Architected the application to guarantee zero database uploads, ensuring files never leave the device."
                impact="Delivered a high-performance, highly secure SaaS utility that completely bypasses cloud-based processing for maximum user privacy."
              />
            </SpotlightCard>
          </motion.div>

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
                techStack={["Next.js", "TypeScript", "Custom UI/UX", "Responsive Layout"]}
                challenge="A natural hair care brand needed a premium, high-converting digital storefront to showcase its herbal products and capture customer interest ahead of launch."
                solution="Engineered a high-end e-commerce landing page from scratch leveraging Next.js and TypeScript. Crafted a custom UI that visually communicates the brand’s '100% natural' identity with dynamic testimonial sections and email capture."
                impact="Delivered a scalable, conversion-ready e-commerce foundation that establishes immediate brand credibility and trust."
              />
            </SpotlightCard>
          </motion.div>

        </div>
      </section>

      {/* Footer / Contact CTA */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32" id="contact">
        <div className="flex flex-col items-center text-center p-12 md:p-20 bg-zinc-900 rounded-3xl border border-zinc-800 shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight">
            Ready to build something <span className="text-emerald-400">great?</span>
          </h2>
          <p className="text-zinc-400 max-w-xl mb-10 text-lg">
            Whether you need an enterprise AI application, a secure utility tool, or a high-converting e-commerce storefront, ZeniTech has you covered. Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:zenitech007@gmail.com" 
              className="px-8 py-3.5 font-semibold text-zinc-900 bg-emerald-400 rounded-full hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.2)]"
            >
              Email Me
            </a>
            <a 
              href="https://wa.me/2348102203238" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 font-semibold text-zinc-100 border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors"
            >
              WhatsApp Me
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}