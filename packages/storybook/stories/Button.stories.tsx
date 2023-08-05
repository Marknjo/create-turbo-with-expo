import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { ButtonSize, Button, ButtonVariants } from '@mj/ui/components/Buttons'
import { EnhancedView, View } from '@comps/View'

// Prep Button

const sizes: ButtonSize[] = ['sm', 'default', 'lg']
const variants: ButtonVariants[] = [
  'default',
  'secondary',
  'outline',
  'link',
  'destructive',
  'ghost',
]

// Meta
const meta = {
  title: 'Buttons/Native Button',

  component: Button,

  parameters: {
    controls: { expanded: true },
  },

  args: {},

  argTypes: {
    size: {
      defaultValue: 'default',
      control: 'inline-radio',
    },
    onPress: { action: 'Clicked 🚩' },
  },

  render: args => (
    <EnhancedView>
      <Button {...args} />
    </EnhancedView>
  ),
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

// Presentation
export const Default: Story = {
  render: args => (
    <View prop="size" value="default">
      <Button {...args} />
    </View>
  ),
  args: {
    variant: 'default',
    size: 'default',
  },
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step('Click Button', async () => {
      await userEvent.click(canvas.getByRole('button'))
    })

    await waitFor(() => expect(args.onPress).toHaveBeenCalled())
  },
}

export const AllButtons: Story = {
  args: {},
  parameters: {
    hideNoControlsWarning: true,
  },
  argTypes: {
    onPress: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
    text: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },

  // @ts-expect-error: Satisfies
  render: args =>
    variants.map(variant => (
      <React.Fragment key={variant}>
        <View prop="variant" value={variant}>
          {sizes.map(sz => (
            <Button {...args} key={sz} variant={variant} size={sz}>
              Button {sz}
            </Button>
          ))}
        </View>
      </React.Fragment>
    )),
}

export const Primary: Story = {
  args: {
    variant: 'default',
  },
  argTypes: {
    variant: {
      defaultValue: 'default',
    },
    text: {
      defaultValue: 'Primary Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args => {
    return sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    ))
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  argTypes: {
    variant: {
      defaultValue: 'secondary',
    },
    text: {
      defaultValue: 'Secondary Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args =>
    sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    )),
}

export const Outlined: Story = {
  args: {
    variant: 'outline',
  },
  argTypes: {
    variant: {
      defaultValue: 'outline',
    },
    text: {
      defaultValue: 'Outlined Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args =>
    sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    )),
}

export const Link: Story = {
  args: {
    variant: 'link',
  },
  argTypes: {
    variant: {
      defaultValue: 'link',
    },
    text: {
      defaultValue: 'Link Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args =>
    sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    )),
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  argTypes: {
    variant: {
      defaultValue: 'destructive',
    },
    text: {
      defaultValue: 'Destructive Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args =>
    sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    )),
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
  argTypes: {
    variant: {
      defaultValue: 'ghost',
    },
    text: {
      defaultValue: 'Ghost Button',
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  // @ts-expect-error: Satisfies
  render: args =>
    sizes.map(sz => (
      <React.Fragment key={sz}>
        <View prop="size" value={sz}>
          <Button {...args} size={sz} />
        </View>
      </React.Fragment>
    )),
}
