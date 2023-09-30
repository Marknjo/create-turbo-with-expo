import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'


export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './providers/**/*.{js,ts,jsx,tsx}',
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
