import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Localization from "expo-localization";
import i18n from "i18n-js";

i18n.locale = Localization.locale;
i18n.fallbacks = true;

i18n.translations = {
  en: {
    "hello world": "Hello World!",
    welcome: "Open up App.js to start working on your app!",
  },
  pt: {
    "hello world": "Olá mundo!",
    welcome: "Abra o App.js para começar a trabalhar no seu aplicativo!",
  },
};
export default function App() {
  return (
    <View style={styles.container}>
      <Text>{i18n.t("hello world")}</Text>
      <Text>{i18n.t("welcome")}</Text>
      <StatusBar style="auto" />
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
