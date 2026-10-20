export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: readonly ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'Understanding your goals, audience and requirements',
  },
  {
    step: '02',
    title: 'DESIGN',
    description: 'Creating wireframes and visuals that communicate',
  },
  {
    step: '03',
    title: 'DEVELOP',
    description: 'Building clean, responsive and scalable solutions',
  },
  {
    step: '04',
    title: 'DELIVER',
    description: 'Testing, optimizing and launching with care',
  },
] as const;
