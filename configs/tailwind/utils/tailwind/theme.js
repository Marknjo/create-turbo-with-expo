import { fontFamily }from 'tailwindcss/defaultTheme'
import { withOpacity }from './utils'
import { colors }from './colors'


/* @type {import('tailwindcss').Config['theme']} */
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      xs: '320px',
    },
  },
  extend: {
    colors: {
      border: withOpacity(colors.light.border),
      input: withOpacity(colors.light.input),
      ring: withOpacity(colors.light.ring),
      background: withOpacity(colors.light.background),
      foreground: withOpacity(colors.light.foreground),

      primary: {
        DEFAULT: withOpacity(colors.light.primary),
        foreground: withOpacity(colors.light.primaryForeground),
      },

      secondary: {
        DEFAULT: withOpacity(colors.light.secondary),
        foreground: withOpacity(colors.light.secondaryForeground),
      },

      destructive: {
        DEFAULT: withOpacity(colors.light.destructive),
        foreground: withOpacity(colors.light.destructiveForeground),
      },

      muted: {
        DEFAULT: withOpacity(colors.light.muted),
        foreground: withOpacity(colors.light.mutedForeground),
      },

      accent: {
        DEFAULT: withOpacity(colors.light.accent),
        foreground: withOpacity(colors.light.accentForeground),
      },

      popover: {
        DEFAULT: withOpacity(colors.light.popover),
        foreground: withOpacity(colors.light.popoverForeground),
      },

      card: {
        DEFAULT: withOpacity(colors.light.card),
        foreground: withOpacity(colors.light.cardForeground),
      },

      dark: {
        border: withOpacity(colors.dark.border),
        input: withOpacity(colors.dark.input),
        ring: withOpacity(colors.dark.ring),
        background: withOpacity(colors.dark.background),
        foreground: withOpacity(colors.dark.foreground),

        primary: {
          DEFAULT: withOpacity(colors.dark.primary),
          foreground: withOpacity(colors.dark.primaryForeground),
        },

        secondary: {
          DEFAULT: withOpacity(colors.dark.secondary),
          foreground: withOpacity(colors.dark.secondaryForeground),
        },

        destructive: {
          DEFAULT: withOpacity(colors.dark.destructive),
          foreground: withOpacity(colors.dark.destructiveForeground),
        },

        muted: {
          DEFAULT: withOpacity(colors.dark.muted),
          foreground: withOpacity(colors.dark.mutedForeground),
        },

        accent: {
          DEFAULT: withOpacity(colors.dark.accent),
          foreground: withOpacity(colors.dark.accentForeground),
        },

        popover: {
          DEFAULT: withOpacity(colors.dark.popover),
          foreground: withOpacity(colors.dark.popoverForeground),
        },

        card: {
          DEFAULT: withOpacity(colors.dark.card),
          foreground: withOpacity(colors.dark.cardForeground),
        },
      },
    },
    // borderRadius: {
    //   lg: `var(${constants.radius})`,
    //   md: `calc(${constants.radius} - 2px)`,
    //   sm: `calc(${constants.radius} - 4px)"`,
    // },
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

