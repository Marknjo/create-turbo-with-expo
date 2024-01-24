import { Platform } from 'react-native'

/// platform check
export const isWeb = Platform.OS === 'web'
export const isMobile = Platform.OS !== 'web'
