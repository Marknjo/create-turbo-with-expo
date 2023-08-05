import type { Config } from 'tailwindcss'

import baseConfig from '@mj/tailwind'

const { theme } = require('@mj/ui/utils/tailwind/theme')

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './index.tsx',
    '../../packages/ui/pages/**/*.{ts,tsx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../packages/ui/providers/**/*.{ts,tsx}',
  ],
  theme: {
    ...theme,
  },
  presets: [baseConfig],
} satisfies Config
