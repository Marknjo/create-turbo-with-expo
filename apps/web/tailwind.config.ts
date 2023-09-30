import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'


export default {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/providers/**/*.{js,ts,jsx,tsx}',
  ],
  important: 'html',
  presets: [baseConfig],
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ]
} satisfies Config
