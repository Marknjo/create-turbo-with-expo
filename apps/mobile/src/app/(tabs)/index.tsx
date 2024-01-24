import { ScrollView, StyleSheet, Text as T } from "react-native";
import { AnimatedStyleUpdateExample } from "@/components/AnimatedStyledUpdateExample";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Separator } from "@/components/Separator";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View className="flex flex-1">
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Tab One</Text>

          <T>Styled with Nativewind</T>

          <EditScreenInfo path="app/(tabs)/index.tsx" />
          <Separator />
          <Text style={styles.title}>Reanimated Example</Text>
          <AnimatedStyleUpdateExample />
        </View>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
