import { StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { HomeScreen } from '@mj/ui/pages/home'
import Colors from '@constants/Colors'

export default function TabOneScreen() {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}
    >
      <HomeScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
