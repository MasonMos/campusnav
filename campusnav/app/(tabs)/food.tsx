import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import { Link } from "expo-router";
import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";
import { LineChart } from "react-native-chart-kit";
import * as SQLite from 'expo-sqlite';

interface FoodItem {
  food: string;
  calories: number;
}

const db = SQLite.openDatabaseSync("calories.db");

export default function Home() {
  const { userData } = useUserContext();
  const { weight, age, height, fname } = userData;
  const [modalVisible, setModalVisible] = useState(false);
  const [food, setFood] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [foodList, setFoodList] = useState<FoodItem[]>([]);
  const [dailyCalories, setDailyCalories] = useState<number[]>([]);
  const [totalCalories, setTotalCalories] = useState(0);
  

  const calculateCalories = () => {
    if (weight && age && height && fname) {
      const BMR = 10 * (weight * 0.453592) + 6.25 * (height) - 5 * age + 5;
      return BMR * 1.2;
    }
    return null;
  };

  const calculateDailyCalories = () => {
    return foodList.reduce((total, item) => total + item.calories, 0);
  };

  const addFood = () => {
    if (food && caloriesInput) {
      const calories = Number(caloriesInput);
      setFoodList([...foodList, { food, calories }]);
      setFood("");
      setCaloriesInput("");
      setModalVisible(false);
      const total = calculateDailyCalories();
      setTotalCalories(total);    }
  };

  const name = fname;
  const calories = calculateCalories();
  const foodCalories = calculateDailyCalories();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome, {name}!</Text>
        <Button title="+" onPress={() => setModalVisible(true)} />
      </View>
      {calories && <Text style={styles.text}>Daily Calorie Intake: {foodCalories.toFixed(2) + " / " + calories.toFixed(2)} kcal</Text>}
      
      {foodList.map((item, index) => (
        <Text key={index} style={styles.text}>{item.food}: {item.calories} kcal</Text>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Food"
            value={food}
            onChangeText={setFood}
            style={styles.input}
          />
          <TextInput
            placeholder="Calories"
            value={caloriesInput}
            onChangeText={setCaloriesInput}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button title="Add Food" onPress={addFood} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#25292e",
    paddingTop: 50,
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
  text: {
    color: "#fff",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    width: "80%",
  },
});
