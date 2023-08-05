'use client'

import { StyledProps, styled } from 'nativewind'
import { ElementType, forwardRef } from 'react'
import { Text as NativeText, Platform, Linking, TextStyle } from 'react-native'

import { TextLink as SolitoTextLink } from 'solito/link'

const StyledText = styled(NativeText)

/**
 * You can use this pattern to create components with default styles
 */
export interface TProps extends $ElementProps<typeof NativeText> {
  as?: 'p' | 'strong' | 'span' | 'i' | 'b' | 'em' | 'sup' | 'sub' | 'small'
}
export const Text = forwardRef<NativeText, StyledProps<TProps>>(function Text(
  { className = '', as, ...props },
  ref,
) {
  const nativeAProps = Platform.select<Partial<TProps>>({
    web: {},
    default: {},
  })

  const Component = (Platform.OS === 'web'
    ? as || 'p'
    : StyledText) as unknown as ElementType<any>

  return (
    <Component
      className={`${Component === 'p' ? 'my-4' : ''} text-base text-black ${
        Component === 'em' || as === 'strong' ? 'bold' : ''
      } ${Component === 'em' || as === 'i' ? 'italic' : ''} ${
        Component === 'small' ? 'text-xs' : ''
      } ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
      {...(Platform.OS === 'web'
        ? { role: 'link' }
        : { accessibilityRole: 'link' })}
    />
  )
})

/**
 * Components can have defaultProps and styles
 */
export const H1 = styled<$ElementProps<typeof NativeText>>(
  NativeText,
  'text-3xl font-extrabold my-4 block',
)

H1.defaultProps = {
  ...(Platform.OS === 'web'
    ? { role: 'header' }
    : { accessibilityRole: 'header' }),
  'aria-level': 1,
}

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
// export interface AProps extends ComponentProps<typeof Text> {
export interface AProps extends $ElementProps<typeof NativeText> {
  href?: string
  target?: '_blank'
}

export const A = forwardRef<NativeText, StyledProps<AProps>>(function A(
  { className = '', href, hrefAttrs, ...props },
  ref,
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      ...hrefAttrs,
    },
    default: {
      onPress: event => {
        props.onPress && props.onPress(event)
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href)
        }
      },
    },
  })

  const Component = (Platform.OS === 'web'
    ? 'a'
    : StyledText) as unknown as ElementType<any>

  return (
    <Component
      className={`text-orange-500 hover:underline ${className} block`}
      {...props}
      {...nativeAProps}
      ref={ref}
      {...(Platform.OS === 'web'
        ? { role: 'link' }
        : { accessibilityRole: 'link' })}
    />
  )
})

/**
 * Solito's TextLink doesn't work directly with styled() since it has a textProps prop
 * By wrapping it in a function, we can forward style down properly.
 */
export const TextLink = styled<
  $ElementProps<typeof SolitoTextLink> & { style?: TextStyle }
>(function TextLink({ style, textProps, ...props }) {
  return (
    <SolitoTextLink
      textProps={{ ...textProps, style: [style, textProps?.style] }}
      {...props}
    />
  )
}, 'text-base font-bold hover:underline text-blue-500')
