import { Button, Text, TextInput } from "react-native-paper";
import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

export default function send() {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput placeholder="Address or phone number" mode="outlined" />
      <Button mode="contained">Enter Recipient</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 6,
  },
});
