import type { Preview } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { breakPoints } from '@mj/tailwind/utils'

import '@mj/tailwind/storybooks.css'
import { globalDecorators } from './decorators'

// Create custom viewports using widths defined in design tokens
const breakpointViewports = Object.keys(breakPoints).reduce(
  (acc, key) => {
    acc[`breakpoint${key}`] = {
      name: `Breakpoint - ${key}`,
      styles: {
        width: breakPoints[key as keyof typeof breakPoints],
        // Account for padding and border around viewport preview
        height: 'calc(100% - 20px)',
      },
      type: 'other',
    }
    return acc
  },
  {} as typeof INITIAL_VIEWPORTS,
)

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters

const preview: Preview = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        ...breakpointViewports,
        ...INITIAL_VIEWPORTS,
      },
    },
  },
  decorators: globalDecorators,
}

export default preview
