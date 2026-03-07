import React from 'react';

interface ProjectCardProps {
  title: string;
  challenge: string;
  solution: string;
  impact: string;
  techStack: string[];
  liveLink?: string; // Optional: Only use if you have a live URL to show
}

export default function ProjectCard({ 
  title, 
  challenge, 
  solution, 
  impact, 
  techStack, 
  liveLink 
}: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 shadow-sm hover:shadow-md">
      
      {/* Header Section */}
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-2xl font-bold text-zinc-100 leading-tight">
          {title}
        </h3>
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="shrink-0 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Live Site ↗
          </a>
        )}
      </div>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span 
            key={index} 
            className="px-3 py-1 text-xs font-medium tracking-wide text-zinc-300 bg-zinc-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Case Study Details */}
      <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
        <p>
          <strong className="block mb-1 text-zinc-200">The Challenge</strong>
          {challenge}
        </p>
        <p>
          <strong className="block mb-1 text-zinc-200">The Solution</strong>
          {solution}
        </p>
        <p>
          <strong className="block mb-1 text-emerald-500/90">The Impact</strong>
          {impact}
        </p>
      </div>
      
    </div>
  );
}