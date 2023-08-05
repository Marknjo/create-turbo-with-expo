import { Platform, View as NativeView, Pressable } from 'react-native'

import { styled } from 'nativewind'
import { El } from '../utils/prepper'

export const View = Platform.OS === 'web' ? El : styled(NativeView)

export const PressableView = styled(Pressable)
