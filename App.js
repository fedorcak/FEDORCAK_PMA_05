import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { TextInput, Button } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
//import Item from "./src/components/Item";

export default function App() {
  const [item, setItem] = useState("");
  const [task, setTask] = useState([]);
  const [taskColor, setTaskColor] = useState(styles.task);

  function handleAddItem() {
    console.log("item", item);
    setTask([...task, item]);
  }

  function handleInputText(text) {
    setItem(text);
  }

  function onPressFunction(id) {
    console.log("stlaceny task ", task[id]);

    taskColor == styles.task
      ? setTaskColor(styles.taskGreen)
      : setTaskColor(styles.task);
  }

  //console.log(task[0]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputText}
          placeholder="Novy"
          style={styles.input}
        />
        <Button onPress={handleAddItem} title="add" color="#841584" />
      </View>

      <View style={styles.udalosti}>
        {task.map((i, index) => (
          <Pressable key={index} onPress={() => onPressFunction(index)}>
            <Text style={taskColor} key={index}>
              {i}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  udalosti: {
    flex: 2,
    borderWidth: 2,
    borderColor: "#ff9900",
    color: "#0d0d0d",
  },

  task: {
    backgroundColor: "#ff3300",
    padding: 8,
    margin: 5,
  },

  taskGreen: {
    backgroundColor: "#00ff00",
    padding: 8,
    margin: 5,
  },
});
