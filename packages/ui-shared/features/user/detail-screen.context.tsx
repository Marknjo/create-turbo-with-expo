import React from 'react'

import { View, Text } from 'dripsy'
import { TextLink } from 'solito/link'

export function UserDetailScreenContent({ id }: { id: string }) {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
