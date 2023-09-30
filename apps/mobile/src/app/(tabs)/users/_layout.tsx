import { Stack } from 'expo-router'

export default function UsersScreen() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Users',
        }}
      />

      <Stack.Screen name="[id]" />
    </Stack>
  )
}
