export interface TechTool {
  name: string;
  iconId:
    | 'html5'
    | 'css3'
    | 'javascript'
    | 'typescript'
    | 'react'
    | 'nextjs'
    | 'tailwind'
    | 'nodejs'
    | 'git'
    | 'figma'
    | 'vscode'
    | 'firebase';
}

export const toolkitList: readonly TechTool[] = [
  // Row 1
  { name: 'HTML5', iconId: 'html5' },
  { name: 'CSS3', iconId: 'css3' },
  { name: 'JavaScript', iconId: 'javascript' },
  { name: 'TypeScript', iconId: 'typescript' },
  // Row 2
  { name: 'React', iconId: 'react' },
  { name: 'Next.js', iconId: 'nextjs' },
  { name: 'Tailwind CSS', iconId: 'tailwind' },
  { name: 'Node.js', iconId: 'nodejs' },
  // Row 3
  { name: 'Git & GitHub', iconId: 'git' },
  { name: 'Figma', iconId: 'figma' },
  { name: 'VS Code', iconId: 'vscode' },
  { name: 'Firebase', iconId: 'firebase' },
] as const;
