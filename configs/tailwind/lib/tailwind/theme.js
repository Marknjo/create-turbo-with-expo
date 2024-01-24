import { fontFamily } from 'tailwindcss/defaultTheme'

import { breakPoints } from '..'
import { colors } from './colors'
import { constants } from './constants'
import { withOpacity } from './utils'

/* @type {import('tailwindcss').Config['theme']} */
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: breakPoints,
  },
  extend: {
    colors: {
      border: withOpacity(colors.cssVars.border),
      input: withOpacity(colors.cssVars.input),
      ring: withOpacity(colors.cssVars.ring),
      background: withOpacity(colors.cssVars.background),
      foreground: withOpacity(colors.cssVars.foreground),

      primary: {
        DEFAULT: withOpacity(colors.cssVars.primary),
        foreground: withOpacity(colors.cssVars.primaryForeground),
      },

      secondary: {
        DEFAULT: withOpacity(colors.cssVars.secondary),
        foreground: withOpacity(colors.cssVars.secondaryForeground),
      },

      destructive: {
        DEFAULT: withOpacity(colors.cssVars.destructive),
        foreground: withOpacity(colors.cssVars.destructiveForeground),
      },

      muted: {
        DEFAULT: withOpacity(colors.cssVars.muted),
        foreground: withOpacity(colors.cssVars.mutedForeground),
      },

      accent: {
        DEFAULT: withOpacity(colors.cssVars.accent),
        foreground: withOpacity(colors.cssVars.accentForeground),
      },

      popover: {
        DEFAULT: withOpacity(colors.cssVars.popover),
        foreground: withOpacity(colors.cssVars.popoverForeground),
      },

      card: {
        DEFAULT: withOpacity(colors.cssVars.card),
        foreground: withOpacity(colors.cssVars.cardForeground),
      },
    },

    borderColor: {
      DEFAULT: 'hsl(var(--border))',
    },
    borderRadius: {
      lg: `var(${constants.radius})`,
      md: `calc(${constants.radius} - 2px)`,
      sm: `calc(${constants.radius} - 4px)"`,
    },
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
}
