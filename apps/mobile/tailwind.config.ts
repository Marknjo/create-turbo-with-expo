import type { Config } from 'tailwindcss'

import baseConfig from '@mj/tailwind'

export default {
  content: [
    './src/**/*.{ts,tsx}',
    './index.tsx',
    '../../packages/ui/pages/**/*.{ts,tsx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../packages/ui/providers/**/*.{ts,tsx}',
  ],
  presets: [baseConfig],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ]
} satisfies Config
