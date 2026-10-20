import { SkillCategory } from './types';

/**
 * Technical skills matrix grouped strictly into 3 tiers.
 * Replaces all legacy percentage bars with transparent proficiency levels.
 */
export const skillCategories: readonly SkillCategory[] = [
  {
    tier: 'Expert',
    description: 'Core daily production stack with extensive architectural mastery',
    skills: [
      'TypeScript (Strict)',
      'Next.js 15+ (App Router)',
      'React 19 & Server Components',
      'Tailwind CSS Architecture',
      'Core Web Vitals & Performance',
      'Semantic HTML & WCAG AA Accessibility',
      'Responsive Systems & Swiss UI',
      'REST & OpenAPI Integration',
    ],
  },
  {
    tier: 'Working knowledge',
    description: 'Backend services, databases, build tools and deployment infrastructure',
    skills: [
      'Node.js & Express / Fastify',
      'Python & Scripting',
      'PostgreSQL & Supabase',
      'Firebase & Firestore',
      'Docker & Containerization',
      'Git / GitHub Actions CI/CD',
      'Google Gemini & OpenAI APIs',
      'Figma & Design Systems',
    ],
  },
  {
    tier: 'Learning',
    description: 'Actively exploring and prototyping in current R&D sprints',
    skills: [
      'Rust for WebAssembly (Wasm)',
      'Local Small LLM Orchestration (Ollama)',
      'Distributed Edge Architecture',
      'WebGPU & Shader Foundations',
    ],
  },
] as const;
