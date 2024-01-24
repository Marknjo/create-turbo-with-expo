// override react-native types with react-native-web types
import { ElementType } from 'react'
import 'react-native'

declare module 'react-native' {
  interface PressableStateCallbackType {
    hovered?: boolean
    focused?: boolean
  }
  interface ViewStyle {
    transitionProperty?: string
    transitionDuration?: string
  }
  interface TextProps {
    accessibilityComponentType?: never
    accessibilityTraits?: never
    accessibilityLevel?: number
    role?: string
    'aria-level'?: number
    accessibilityRole?: string
    href?: string
    as?: ElementType<any>
  }
  interface ViewProps {
    accessibilityRole?: string
    role?: string
    href?: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  }
}
