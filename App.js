import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { TextInput, Button } from "react-native";
import { StyleSheet, Text, View, Pressable } from "react-native";
//import Item from "./src/components/Item";

export default function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddItem() {
    //console.log("item", item);
    setTasks([...tasks, { text: item, done: false }]);
  }

  function handleInputText(text) {
    setItem(text);
  }

  function onPressFunction(index) {
    const copy = [...tasks];
    copy[index] = { text: copy[index].text, done: !copy[index].done };
    setTasks(copy);
  }

  function deleteTask(index) {
    //console.log(tasks);
    const copy = [...tasks];
    copy.splice(index, 1);

    //console.log("tasks: ", tasks);
    setTasks(copy);
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
        {tasks.map((task, index) => (
          <Pressable
            key={index}
            onPress={() => onPressFunction(index)}
            onLongPress={() => deleteTask(index)}
          >
            <Text style={task.done ? styles.taskGreen : styles.task}>
              {task.text}
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
