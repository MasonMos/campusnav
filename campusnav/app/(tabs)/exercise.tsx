import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";

interface workoutItem {
  exercise: string;
  set: number;
  rep: number;
}


export default function Home() {
  const { userData } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [setInput, setSetInput] = useState("");
  const [repInput, setRepInput] = useState("");
  const [exerciseInput, setExerciseInput] = useState("");
  const [workoutList, setWorkoutList] = useState<workoutItem[]>([]);

  const addExercise = () => {
    if (setInput && repInput) {
      const set = Number(setInput);
      const rep = Number(repInput);
      const exercise = exerciseInput;
      setWorkoutList([...workoutList, { exercise, set, rep }]);
      setSetInput("");
      setRepInput("");
      setExerciseInput("");
      setModalVisible(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button title="+" onPress={() => setModalVisible(true)} />
      </View>
      {<Text style={styles.text}>Exercise List:</Text>}
      
      {workoutList.map((item, index) => (
        <Text key={index} style={styles.text}>{item.exercise}: {item.set} sets and {item.rep} reps</Text>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Name"
            value={exerciseInput}
            onChangeText={setExerciseInput}
            style={styles.input}
          />
          <TextInput
            placeholder="Sets"
            value={setInput}
            onChangeText={setSetInput}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Name"
            value={repInput}
            onChangeText={setRepInput}
            style={styles.input}
            keyboardType="numeric"
          />
          <Button title="Add Exercise" onPress={addExercise} />
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
    backgroundColor: "#FFFFFF",
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
    color: "#ADD8E6",
    marginBottom: 10,
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
