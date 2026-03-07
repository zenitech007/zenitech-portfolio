'use client'

import { motion } from 'framer-motion'

export default function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]" />

      {/* animated grid */}
      <motion.div
        animate={{ y: [0, -100] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
        className="absolute inset-0 
        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        bg-size-[60px_60px]"
      />

      {/* perspective tilt */}
      <div className="absolute inset-0 transform perspective-[1000px] rotate-x-60 scale-[1.5]" />

    </div>
  )
}