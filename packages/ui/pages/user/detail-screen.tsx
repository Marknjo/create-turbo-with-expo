'use client'
import { Text } from '../../components/Typography'
import { View } from '../../components/Layouts'
import { useParams } from 'solito/navigation'
import { TextLink } from 'solito/link'

export function UserDetailScreen() {
  const param = useParams<{ id: string }>()

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${param.id}`}</Text>
      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
