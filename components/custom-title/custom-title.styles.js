import { StyleSheet, Dimensions } from "react-native";

// Getting 90% of the width to fit content
const adjustedWidth = Dimensions.get("window").width * 0.9;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: adjustedWidth
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  }
});
