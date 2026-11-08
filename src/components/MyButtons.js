import { StyleSheet } from "react-native";
import { Button } from "react-native";

export default function MyButtons({ text, cislo, onPressFunction }) {
  return (
    <Button
      onPress={() => onPressFunction(text, cislo)}
      disabled={cislo == 0 && text == "-"}
      style={styles.button}
      title={text}
      color="#2196F3"
    />
  );
}

const styles = StyleSheet.create({});
