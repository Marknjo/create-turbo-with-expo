import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'

export default {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../ui/pages/**/*.{js,ts,jsx,tsx}',
    '../ui/components/**/*.{js,ts,jsx,tsx}',
    '../ui/providers/**/*.{js,ts,jsx,tsx}',
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


