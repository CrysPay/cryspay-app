import { Button, Text, TextInput, Appbar, useTheme } from "react-native-paper";
import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function send() {
  const router = useRouter();
  const theme = useTheme();
  return (
    <>
      <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Send Aptos" />
      </Appbar.Header>
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <TextInput
          mode="outlined"
          placeholder="Address or Phone Number"
          // left={<TextInput.Icon icon="magnify" />}
          style={styles.textInput}
          theme={{ roundness: 12 }}
        />
        <Button mode="contained" style={styles.sendButton}>
          Enter Recipient
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textInput: {
    marginBottom: 16,
    backgroundColor: "white",
  },
  sendButton: {
    marginHorizontal: 4,
    borderRadius: 12,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//   },
//   content: {
//     flex: 1,
//
//   },
//   title: {
//     marginBottom: 16,
//   },

//   navbar: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     alignItems: "center",
//     backgroundColor: "white",
//     paddingVertical: 8,
//     borderTopWidth: 1,
//     borderTopColor: "#e0e0e0",
//   },
// });
