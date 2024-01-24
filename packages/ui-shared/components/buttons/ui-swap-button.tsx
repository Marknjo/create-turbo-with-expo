import React, { useMemo } from 'react'
import { Text } from 'dripsy'
import { MotiPressable } from 'moti/interactions'

type UISwapButtonProps = {
  onPress: () => void
  text?: string
}

export const UISwapButton = ({ onPress, text }: UISwapButtonProps) => {
  return (
    <MotiPressable
      onPress={onPress}
      style={{
        backgroundColor: '#4b0a88',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
      }}
      animate={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet'

            return {
              opacity: hovered || pressed ? 0.5 : 1,
            }
          },
        [],
      )}
      transition={useMemo(
        () =>
          ({ hovered, pressed }) => {
            'worklet'

            return {
              delay: hovered || pressed ? 0 : 100,
            }
          },
        [],
      )}
    >
      <Text style={{ fontSize: 18, color: '#f3eff8' }}>
        {text || 'Show Regular UI Lib'}
      </Text>
    </MotiPressable>
  )
}
