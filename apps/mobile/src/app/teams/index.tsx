import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '@mj/ui/components/Layouts'
import { H1, TextLink } from '@mj/ui/components/Typography'
import Colors from '@constants/Colors'
import { Stack } from 'expo-router'

export default function TeamScreen() {
  const colorScheme = useColorScheme()

  const spCl = Colors[colorScheme ?? 'light'].tabIconDefault

  return (
    <SafeAreaView
      className={`flex-1 bg-[${Colors[colorScheme ?? 'light'].background}]`}
    >
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Teams',
        }}
      />
      <View className="flex-1 items-center justify-center">
        <H1>All Teams</H1>
        <View className={`my-4 h-[2px] w-10/12 bg-slate-100/75`} />
        <View className="mx-7">
          <TextLink href="/teams/james">James Harry</TextLink>
          <TextLink href="/teams/salome">Salome Kiarie</TextLink>
          <TextLink href="/teams/linda-angrey">Linda Angrey</TextLink>
        </View>
      </View>

      <StatusBar />
    </SafeAreaView>
  )
}
