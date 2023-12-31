import { StyleSheet, View } from "react-native";
import Slider from "./component/Slider";

export default function App() {
  return (
    <View View style={styles.container}>
      <Slider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
