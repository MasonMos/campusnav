import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import { useUserContext } from "../UserContext";
import { useState, useEffect } from "react";

interface WaterItem {
  liters: number;
}


export default function Home() {
  const { userData } = useUserContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [literInput, setLiterInput] = useState("");
  const [waterList, setWaterList] = useState<WaterItem[]>([]);

  const addWater = () => {
    if (literInput) {
      const liters = Number(literInput);
      setWaterList([...waterList, { liters}]);
      setLiterInput("");
      setModalVisible(false);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button title="+" onPress={() => setModalVisible(true)} />
      </View>
      {<Text style={styles.text}>Water Intake:</Text>}
      
      {waterList.map((item, index) => (
        <Text key={index} style={styles.text}>{item.liters} liters</Text>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            placeholder="Water Intake (liters)"
            value={literInput}
            onChangeText={setLiterInput}
            style={styles.input}
            keyboardType="numeric"
          />
          <Button title="Add Water" onPress={addWater} />
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
