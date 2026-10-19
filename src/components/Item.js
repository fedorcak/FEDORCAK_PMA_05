import { Text, StyleSheet } from "react-native";

export default function Item({ title }) {
  return <Text style={styles.taskItem}>{title}</Text>;
}

const styles = StyleSheet.create({
  taskItem: {
    borderColor: "#ff9900",
  },
});
