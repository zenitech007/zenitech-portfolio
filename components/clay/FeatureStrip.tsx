'use client';

import React from 'react';
import ClayCard from './ClayCard';
import ClayIconTile from './ClayIconTile';
import ClayPlaceholder from './ClayPlaceholder';

export default function FeatureStrip() {
  const features = [
    {
      title: 'Frontend Engineering',
      description: 'React 19, Next.js 16, and TypeScript architecture with silky 60fps spring animations.',
      tileVariant: 'lavender' as const,
      iconName: 'icon-tasks' as const,
    },
    {
      title: 'AI Systems & Workflows',
      description: 'Google Gemini API integration, multimodal pipelines, and intelligent automated tools.',
      tileVariant: 'pink' as const,
      iconName: 'icon-bulb' as const,
    },
    {
      title: 'Scalable SaaS & Commerce',
      description: 'High-converting digital storefronts, Paystack payment checkouts, and resilient cloud backends.',
      tileVariant: 'mint' as const,
      iconName: 'icon-chart' as const,
    },
    {
      title: 'Product Strategy & UI/UX',
      description: 'User-centered conversion architecture, friendly design systems, and accessible WCAG standards.',
      tileVariant: 'sunny' as const,
      iconName: 'icon-chat' as const,
    },
  ];

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 my-10 sm:my-16">
      <ClayCard variant="cream" className="p-6 sm:p-10 md:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x-2 lg:divide-[#4B2E25]/10">
          {features.map((feat, idx) => (
            <div
              key={feat.title}
              className={`flex flex-col items-center text-center px-4 sm:px-6 space-y-4 ${
                idx > 0 ? 'lg:pl-8' : ''
              }`}
            >
              {/* Colored Clay Icon Tile */}
              <ClayIconTile variant={feat.tileVariant} className="shadow-md">
                <ClayPlaceholder
                  name={feat.iconName}
                  alt={feat.title}
                  width={48}
                  height={48}
                />
              </ClayIconTile>

              {/* Title & 2-Line Description */}
              <div className="space-y-1.5">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#4B2E25] tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6B4A3E] leading-relaxed font-semibold max-w-xs mx-auto">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ClayCard>
    </section>
  );
}
