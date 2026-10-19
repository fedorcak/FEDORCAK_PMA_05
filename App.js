import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { TextInput, Button } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Item,
} from "react-native";
//import Item from "./src/components/Item";

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
          placeholder="Novy"
          style={styles.input}
        />
        <Button onPress={handleAddItem} title="add" color="#841584" />
      </View>

      <ScrollView style={styles.udalosti}>
        <View style={styles.udalosti}>
          {task.map((i, index) => (
            <Text key={index}>{i}</Text>
          ))}
        </View>

        <FlatList
          data={task}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
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
});
