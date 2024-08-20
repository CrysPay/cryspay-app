import { useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Appbar, Title, Button, Text, useTheme } from "react-native-paper";

const HomeScreen = () => {
  const theme = useTheme();
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={[
          {
            backgroundColor: theme.colors.background,
            justifyContent: "space-between",
          },
        ]}
      >
        <Appbar.Action icon="account" onPress={() => router.push("/profile")} />
        <Appbar.Action icon="bell" onPress={() => {}} />
      </Appbar.Header>

      <View
        style={[styles.content, { backgroundColor: theme.colors.background }]}
      >
        <View style={styles.totalBalanceContainer}>
          <Text variant="bodyMedium">Total Balance</Text>
        </View>
        <Text variant="headlineMedium">45.68 APT</Text>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained-tonal"
            style={styles.button}
            icon="arrow-up-right"
            onPress={() => router.push('/send')}
          >
            Send
          </Button>
          <Button
            mode="contained-tonal"
            style={styles.button}
            icon="qrcode"
            onPress={() => router.push('/scanner')}
          >
            Scan
          </Button>
        </View>

        <Title>Transactions</Title>
        <View style={styles.transactionsCard}>
          <Button onPress={() => {}}>See More</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
  },
  balanceCard: {
    marginBottom: 16,
  },
  balance: {
    fontSize: 24,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingTop: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 4,
    borderRadius: 12,
  },
  transactionsCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
  },
  totalBalanceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
