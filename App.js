import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import MyButtons from "./src/components/MyButtons";

export default function App() {
  const [cislo, setCislo] = useState(0);

  function onPressFunction(text, cislo) {
    console.log("cislo:", cislo);

    if (text == "-") {
      setCislo(cislo - 1);
    } else {
      if (text == "+") {
        setCislo(cislo + 1);
      } else {
        setCislo(0);
      }
    }
  }
  console.log("cislo po kliknuti:", cislo);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Pocitadlo objednavok</Text>
      </View>
      <Text style={cislo >= 5 ? styles.warning : styles.basic}>{cislo}</Text>
      <View style={styles.buttonsContainer}>
        <MyButtons text="-" cislo={cislo} onPressFunction={onPressFunction} />
        <MyButtons text="+" cislo={cislo} onPressFunction={onPressFunction} />
      </View>
      <MyButtons
        text="Vynulovat"
        cislo={cislo}
        onPressFunction={onPressFunction}
      />
      {cislo >= 5 ? <Text style={styles.warning}>Dosiahnuty limit</Text> : ""}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  warning: {
    color: "rgba(251, 6, 6, 0.89)",
  },
  basic: {
    color: "#0000",
  },
  MyButtons: {
    color: "green",
  },
});
