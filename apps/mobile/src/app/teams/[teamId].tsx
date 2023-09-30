import Colors from '@constants/Colors'
import { H1 } from '@mj/ui/components/Typography'
import { View } from '@mj/ui/components/Layouts'
import { Stack, useLocalSearchParams } from 'expo-router'
import { useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function friendlyName(param: { teamId: string }) {
  if (!param?.teamId) return 'Team'

  const nameArr = param.teamId.split('-')

  const prettyName = nameArr
    .map(name => name.charAt(0).toLocaleUpperCase() + name.slice(1))
    .join(' ')

  return prettyName
}

export default function TeamScreen() {
  const colorScheme = useColorScheme()
  const param = useLocalSearchParams<{ teamId: string }>()

  const prettyName = friendlyName(param)
  return (
    <SafeAreaView
      className={`flex-1 bg-[${Colors[colorScheme ?? 'light'].background}]`}
    >
      <Stack.Screen
        options={{
          title: prettyName,
          headerShown: true,
        }}
      />
      <View className="flex-1 items-center justify-center px-4">
        <H1>Team Name: {prettyName}</H1>
      </View>
    </SafeAreaView>
  )
}
