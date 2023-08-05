import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils'
import { PressableView } from '../Layouts/view'
import { Text } from '../Typography'
import { View } from 'react-native'

const textVariants = cva('text-sm font-medium transition-colors ', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'hover:text-accent-foreground',
      secondary: 'text-secondary-foreground',
      ghost: 'hover:text-accent-foreground',
      link: 'text-primary',
    },
    size: {
      default: null,
      sm: 'text-xs',
      lg: null,
      icon: null,
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

const containerVariants = cva(
  'inline-flex items-center justify-center rounded-md focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary shadow hover:bg-primary/90',
        destructive: 'bg-destructive shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm over:bg-accent',
        secondary: 'bg-secondary shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent ',
        link: 'underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 ',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps extends VariantProps<typeof containerVariants> {
  onPress?: (...args: any) => void
  asChild?: boolean
  text?: string
  children?: React.ReactNode
}

type ComposableBtnProps = ButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>

const tsChecks = new Set([
  // Text Transform
  'uppercase',
  'lowercase',
  'capitalize',
  'normal-case',
  /// Others
  'underline',
  'overline',
  'line-through',
  'no-underline',
  'truncate',
  'italic',
  'non-italic',
  'antialiased',
  'subpixel-antialiased',
  'content-none',
  // Word Breaks
  'break-normal',
  'break-words',
  'break-all',
  'break-keep',
  // Vertical alignment
  'align-baseline',
  'align-top',
  'align-middle',
  'align-bottom',
  'align-text-top',
  'align-text-bottom',
  'align-sub',
  'align-supe',
  // Font Variant Numeric
  'normal-nums',
  'ordinal',
  'slashed-zero',
  'lining-nums',
  'oldstyle-nums',
  'proportional-nums',
  'tabular-nums',
  'diagonal-fractions',
  'stacked-fractions',
])

const filterStyles = (cl: string) =>
  cl.includes('text') ||
  cl.includes('underline') ||
  cl.includes('decoration') ||
  cl.includes('indent') ||
  cl.includes('whitespace') ||
  cl.includes('break') ||
  cl.includes('hyphens') ||
  cl.includes('font') ||
  cl.includes('line') ||
  cl.includes('leading') ||
  cl.includes('tracking') ||
  tsChecks.has(cl)

const Button = React.forwardRef<View, ComposableBtnProps>(
  (
    {
      className,
      variant = 'default',
      size,
      asChild,
      text = 'Button',
      ...props
    },
    ref,
  ) => {
    /// Compute text styles
    const textStyles =
      className &&
      React.useMemo(
        () =>
          className
            .split(' ')
            .filter(cl => filterStyles(cl))
            .join(' '),
        [],
      )
    const containerStyles =
      className &&
      React.useMemo(
        () =>
          className
            .split(' ')
            .filter(cl => !filterStyles(cl))
            .join(' '),
        [],
      )

    const Comp = asChild ? Slot : Text

    return (
      <PressableView
        role="button"
        className={cn(
          containerVariants({
            variant,
            size,
            className: containerStyles,
          }),
        )}
        onPress={props.onPress}
        ref={ref}
      >
        <Comp
          className={cn(
            textVariants({
              variant,
              size,
              className: textStyles,
            }),
          )}
          as="span"
        >
          {props?.children || text}
        </Comp>
      </PressableView>
    )
  },
)

Button.displayName = 'Button'

export { Button, containerVariants as buttonVariants }
