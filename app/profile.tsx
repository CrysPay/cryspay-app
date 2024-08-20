import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text, Appbar } from "react-native-paper";
import React from "react";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Welcome to Cryspay" />
      </Appbar.Header>
      <SafeAreaView style={styles.container}>
        <Text variant="labelMedium">Arup Basak</Text>
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
