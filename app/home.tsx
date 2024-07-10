import React, { useState } from "react";
import { Text, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();
  const [balance, setBalance] = useState<number>(1000);

  const handleSend = () => {
    console.log("Send button pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance: ${balance}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => router.push("/send")}
          icon="send"
          mode="contained"
        >
          Send
        </Button>
        <Button
          onPress={() => router.push("/scanner")}
          icon="call-received"
          mode="contained"
        >
          Recieve
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  balanceContainer: {},
  balanceText: {
    fontSize: 24,
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
});
