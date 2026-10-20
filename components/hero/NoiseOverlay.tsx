import React from 'react';

export default function NoiseOverlay() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
      style={{
        opacity: 0.07,
        mixBlendMode: 'overlay',
      }}
      aria-hidden="true"
    >
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-film-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-film-grain)" />
      </svg>
    </div>
  );
}
