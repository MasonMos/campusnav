import { Text, View, StyleSheet, TextInput} from "react-native";
import React, { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { useUserContext } from "./UserContext";
import { PaperProvider, Button } from "react-native-paper";
import customLightTheme from './theme';

export default function Info() {
  const router = useRouter();
  const { setUserData } = useUserContext();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleConfirm = () => {
    if (!fname || !lname || !age || !weight || !height) {
      alert("Please fill out all fields.");
    } else {
      setUserData({
        fname: fname,
        weight: parseFloat(weight),
        age: parseInt(age),
        height: parseFloat(height),
      });
      router.push("/(tabs)/home");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <PaperProvider theme={customLightTheme}>
        <Text style={styles.nameLabel}>
          First Name:
        </Text>
        <TextInput
          style={styles.name}
          placeholder="First Name"
          onChangeText={setFname}
          value={fname}
          placeholderTextColor="grey"
        >
        </TextInput>
        <Text style={[styles.nameLabel, {marginTop: 0}]}>
          Last Name:
        </Text>
        <TextInput
          style={[styles.name, {marginTop: 10}]}
          placeholder="Last Name"
          onChangeText={setLname}
          value={lname}
          placeholderTextColor="grey"
        >
        </TextInput>
        <Text style={[styles.nameLabel, {marginTop: 0}]}>
          Age:
        </Text>
        <TextInput
          style={styles.name}
          placeholder="Age"
          onChangeText={setAge}
          value={age}
          placeholderTextColor="grey"
        >
        </TextInput>
        <Text style={[styles.nameLabel, {marginTop: 0}]}>
          Weight:
        </Text>
        <TextInput
          style={[styles.name, {marginTop: 10}]}
          placeholder="Lbs."
          onChangeText={setWeight}
          value={weight}
          placeholderTextColor="grey"
        >
        </TextInput>
        <Text style={[styles.nameLabel, {marginTop: 0}]}>
          Height:
        </Text>
        <TextInput
          style={[styles.name, {marginTop: 10}]}
          placeholder="cm."
          onChangeText={setHeight}
          value={height}
          placeholderTextColor="grey"
        >
        </TextInput>
        <Button
            onPress={handleConfirm}
            mode="contained">
          Confirm
        </Button>
        </PaperProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  confirm: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width: 150,
    margin: 30,
    marginTop: 10,
  },
  name: {
    color: "black",
    fontSize: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    width: 150,
    margin : 30,
    marginTop: 10,
  },
  nameLabel: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 30,
    marginTop: 50,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
  },
  button: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
});
