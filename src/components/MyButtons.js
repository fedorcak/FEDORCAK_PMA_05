import { Button, View } from "react-native";
import { StyleSheet } from "react-native";

export default function MyButtons({ text, cislo, onPressFunction }) {
  return (
    <View style={styles.button}>
      <Button
        onPress={() => onPressFunction(text, cislo)}
        disabled={cislo == 0 && text == "-"}
        title={text}
        color="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
});
