import { Config } from 'tailwindcss'
import { theme } from './utils'
import { ThemeConfig } from 'tailwindcss/types/config';


export default {
  content: [''],
  theme: {
    ...theme as Partial<ThemeConfig>
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ]
} satisfies Config

