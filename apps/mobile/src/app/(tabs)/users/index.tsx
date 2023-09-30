import {useColorScheme } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '@mj/ui/components/Layouts'
import { H1, TextLink } from '@mj/ui/components/Typography'
import Colors from '@constants/Colors'

export default function UsersScreen() {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaView
      className={`flex-1 items-center justify-center bg-[${
        Colors[colorScheme ?? 'light'].background
      }]`}
    >
      <View className="center flex-1 items-center">
        <H1>All users</H1>
        <TextLink href="/teams">Teams</TextLink>
        <View className="my-2">
          <H1>Users</H1>
          <TextLink href="/users/james">James</TextLink>
        </View>
      </View>
    </SafeAreaView>
  )
}