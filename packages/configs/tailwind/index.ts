import type { Config } from 'tailwindcss'

export default {
  content: [''],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
} satisfies Config
