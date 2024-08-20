import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { TextInput, Button, Text, TouchableRipple } from "react-native-paper";
import { router } from "expo-router";
import { CountryPicker } from "react-native-country-codes-picker";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState("+91");

  const handleLogin = () => {
    console.log("Logging in with:", phoneNumber);
    router.replace("/home");
  };

  return (
    <SafeAreaView style={styles.wrapperContainer}>
      <View style={styles.headingContainer}>
        <Text variant="headlineSmall">Enter Your Phone Number</Text>
        <Text variant="labelLarge" style={{ textAlign: "center" }}>
          Please Confirm Your Country Code and Enter Your Phone Number
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TouchableRipple
            style={styles.countryContainer}
            onPress={() => setShow(true)}
          >
            <Text>{countryCode}</Text>
          </TouchableRipple>
          <TextInput
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={styles.textInput}
            mode="outlined"
            keyboardType="phone-pad"
          />
        </View>
        <Button mode="contained" onPress={handleLogin} style={styles.button}>
          Login
        </Button>
      </View>
      <CountryPicker
        lang="en"
        show={show}
        pickerButtonOnPress={(item) => {
          setCountryCode(item.dial_code);
          setShow(false);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  headingContainer: {
    alignItems: "center",
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
  },
  countryContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  textInput: {
    flex: 1,
  },
  button: {
    marginTop: 8,
    borderRadius: 8,
  },
});
