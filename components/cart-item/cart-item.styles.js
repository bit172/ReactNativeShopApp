import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.9,
    marginVertical: 10,
    borderRadius: 10
  },

  name: {
    fontWeight: "bold"
  }
});
