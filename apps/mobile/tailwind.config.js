import baseConfig from '@mj/tailwind'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    '../../packages/ui/pages/**/*.{ts,tsx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../packages/ui/providers/**/*.{ts,tsx}',
  ],
  presets: [baseConfig, require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
}
