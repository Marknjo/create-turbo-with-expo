import { useColorScheme } from 'react-native'

import EditScreenInfo from '@screens/EditScreenInfo'

import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@constants/Colors'
import { H1 } from '@mj/ui/components/Typography'
import { View } from '@mj/ui/components/Layouts'

export default function TabTwoScreen() {
  const colorScheme = useColorScheme()

  const bgColor = Colors[colorScheme ?? 'light'].background

  return (
    <SafeAreaView className={`flex-1`} style={{ backgroundColor: bgColor }}>
      <View className="flex-1 items-center justify-center ">
        <H1 className="text-center">Tab Two</H1>
        <View className={`my-4 h-[2px] w-10/12 bg-red-100/75`} />
        <EditScreenInfo path="app/(tabs)/two.tsx" />
      </View>
    </SafeAreaView>
  )
}
