import { StyleSheet, useColorScheme } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Stack } from 'expo-router'
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
      <Stack.Screen
        options={{
          title: 'Users',
          headerBackTitle: 'Users',
          headerTitle: 'Users',
        }}
      />
      <View className="center flex-1 items-center">
        <H1>All users</H1>
        <TextLink href="/teams">Teams</TextLink>
      </View>
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
