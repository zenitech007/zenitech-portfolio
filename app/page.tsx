import React from 'react';
import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import FeaturedProjects from '@/components/FeaturedProjects';
import ToolkitProcessCta from '@/components/ToolkitProcessCta';
import ContactFooter from '@/components/ContactFooter';

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none min-h-screen bg-[#08070d]">
      <Hero />
      <WhatIDo />
      <FeaturedProjects />
      <ToolkitProcessCta />
      <ContactFooter />
    </main>
  );
}
