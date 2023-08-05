import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'
import { theme } from './utils/tailwind/theme'

export default {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './providers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...theme,
  },
  important: 'html',
  presets: [baseConfig],
  plugins: [require('nativewind/tailwind/css')],
} satisfies Config
