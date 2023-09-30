import { StyleSheet, useColorScheme, ScrollView } from 'react-native'

import { HomeScreen } from '@mj/ui/pages/home'
import Colors from '@constants/Colors'

export default function TabOneScreen() {
  const colorScheme = useColorScheme()
  return (
    <ScrollView style={[
        styles.wrapper,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}>
      <HomeScreen />
    </ScrollView>
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
