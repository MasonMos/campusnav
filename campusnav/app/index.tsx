import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to the Health App!</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>This app is designed to help you track your wellbeing. Your health is crucial to your
          success, and we're here to support you on your journey to a healthier, happier you.
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.text}>
          Before we get started, please take a moment to tell us a bit about yourself.
        </Text>
      </View>
      <Link href="/info" style={styles.button}>Let's get started!</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
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
