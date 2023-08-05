import { View } from 'react-native'
import { styled } from 'nativewind'
import { El } from '../utils/prepper'
import { isWeb } from '../../utils'

export const Row = isWeb ? El : styled(View, 'flex-row')
