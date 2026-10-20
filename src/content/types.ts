export interface ProjectMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  client: string;
  role: string;
  year: string;
  techStack: readonly string[];
  problem: string;
  approach: string;
  outcome: string;
  metric: ProjectMetric;
  liveUrl: string;
  githubUrl: string;
  image: string;
  imageAlt: string;
}

export interface StatItem {
  value: string;
  label: string;
  context: string;
}

export interface SkillCategory {
  tier: 'Expert' | 'Working knowledge' | 'Learning';
  description: string;
  skills: readonly string[];
}

export interface TestimonialData {
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
}

export interface ProfileData {
  name: string;
  role: string;
  availability: string;
  location: string;
  headline: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  whatsapp: string;
}

export interface ToolItem {
  name: string;
  category: string;
}
