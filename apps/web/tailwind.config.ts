import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'
import { theme } from '@mj/ui/utils/tailwind/theme'

export default {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/pages/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/providers/**/*.{js,ts,jsx,tsx}',
  ],
  important: 'html',
  theme: {
    ...theme,
  },
  presets: [baseConfig],
  plugins: [require('nativewind/tailwind/css')],
} satisfies Config
