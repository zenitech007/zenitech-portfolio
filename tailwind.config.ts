import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A10',
        surface: '#12121C',
        accent: {
          DEFAULT: '#8B5CF6',
          start: '#A78BFA',
          end: '#7C3AED',
          solid: '#8B5CF6',
        },
        'text-primary': '#F4F4F5',
        'text-muted': '#A1A1AA',
        'border-subtle': 'rgba(167, 139, 250, 0.12)',
      },
      fontFamily: {
        display: ['var(--font-anton)', 'Anton', 'sans-serif'],
        script: ['var(--font-style-script)', 'Style Script', 'cursive'],
        sans: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'Space Grotesk', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
