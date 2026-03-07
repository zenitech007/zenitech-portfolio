'use client'

import { useState } from 'react'

export default function SpotlightCard({ children }: any) {

  const [position, setPosition] = useState({ x: 0, y: 0 })

  function handleMove(e: any) {

    const rect = e.currentTarget.getBoundingClientRect()

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      onMouseMove={handleMove}
      className="relative rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden group"
    >

      {/* spotlight */}
      <div
        className="pointer-events-none absolute w-75 h-75 bg-emerald-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition"
        style={{
          left: position.x - 150,
          top: position.y - 150
        }}
      />

      <div className="relative p-6">
        {children}
      </div>

    </div>
  )
}