import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    width: Dimensions.get("window").width * 0.9,
    marginVertical: 10,
    borderRadius: 10
  },

  image: {
    flex: 1
  },

  text: {
    flex: 3,
    marginHorizontal: 8
  },

  name: {
    fontWeight: "bold"
  },

  addToCart: {
    flex: 2
  }
});
