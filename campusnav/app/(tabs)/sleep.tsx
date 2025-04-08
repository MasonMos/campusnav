import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";

interface SleepItem {
  hours: number;
  minutes: number;
}


export default function Home() {
  const { userData } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [hourInput, setHourInput] = useState("");
  const [minuteInput, setMinuteInput] = useState("");
  const [sleepList, setSleepList] = useState<SleepItem[]>([]);

  const addSleep = () => {
    if (hourInput && minuteInput) {
      const hours = Number(hourInput);
      const minutes = Number(minuteInput);
      setSleepList([...sleepList, { hours, minutes }]);
      setHourInput("");
      setMinuteInput("");
      setModalVisible(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button title="+" onPress={() => setModalVisible(true)} />
      </View>
      {<Text style={styles.text}>Sleep Time:</Text>}
      
      {sleepList.map((item, index) => (
        <Text key={index} style={styles.text}>{item.hours} hours and {item.minutes} minutes</Text>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Hours"
            value={hourInput}
            onChangeText={setHourInput}
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Minutes"
            value={minuteInput}
            onChangeText={setMinuteInput}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button title="Add Sleep" onPress={addSleep} />
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
