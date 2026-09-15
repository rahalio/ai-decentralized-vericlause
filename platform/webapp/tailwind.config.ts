import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--color-ink)',
        mute: 'var(--color-mute)',
        notary: 'var(--color-notary)',
        verdict: 'var(--color-verdict)',
        injunction: 'var(--color-injunction)',
        provisional: 'var(--color-provisional)',
        stone: {
          950: 'var(--color-stone-950)',
          900: 'var(--color-stone-900)',
          700: 'var(--color-stone-700)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
