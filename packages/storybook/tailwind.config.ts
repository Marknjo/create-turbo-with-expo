import type { Config } from 'tailwindcss'
import baseConfig from '@mj/tailwind'

import { theme } from '@mj/ui/utils/tailwind/theme'

export default {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../ui/pages/**/*.{js,ts,jsx,tsx}',
    '../ui/components/**/*.{js,ts,jsx,tsx}',
    '../ui/providers/**/*.{js,ts,jsx,tsx}',
  ],
  important: 'html',
  theme: {
    ...theme,
  },
  presets: [baseConfig],
  plugins: [require('nativewind/tailwind/css')],
} satisfies Config
