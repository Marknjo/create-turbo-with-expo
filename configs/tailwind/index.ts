import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { ThemeConfig } from 'tailwindcss/types/config'

import { theme } from './lib'

export default {
  darkMode: ['class'],
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    ...(theme as Partial<ThemeConfig>),
  },
  plugins: [animate],
} satisfies Config
