import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { UserDetailScreen } from '@mj/ui/pages/user'
import { View } from '@mj/ui/components/Layouts/view'
import { H1 } from '@mj/ui/components/Typography'
import Colors from '@constants/Colors'

export default function ModalScreen() {
  const colorScheme = useColorScheme()
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: Colors[colorScheme ?? 'light'].background },
      ]}
    >
      <View>
        <H1>Modal</H1>
      </View>
      <UserDetailScreen />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
