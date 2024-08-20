import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text, TextInput, useTheme, IconButton } from "react-native-paper";

export default function PaymentsScreen() {
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.content}>
        <Text variant="headlineLarge" style={styles.title}>
          Payments
        </Text>
        <TextInput
          mode="outlined"
          placeholder="Name, Phone No, Address"
          left={<TextInput.Icon icon="magnify" />}
          style={styles.textInput}
          theme={{ roundness: 12 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  textInput: {
    marginBottom: 16,
    backgroundColor: "white",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});
