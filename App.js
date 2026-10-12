import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TextInput, Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);

  function handleAddItem() {
    console.log("item", item);
    setTask([...task, item]);
  }

  function handleInputText(text) {
    setItem(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          placeholder="Rado larp"
          style={styles.input}
        />
        <Button onPress={handleAddItem} title="add" color="#841584" />

        <View style={styles.udalosti}>
          {task.map((i) => {
            <Text>{i}</Text>;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
  },
  udalosti: {
    flex: 5,
  },
});
