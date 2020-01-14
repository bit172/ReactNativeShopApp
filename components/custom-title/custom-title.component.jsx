import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./custom-title.styles";

const CustomTitle = ({ title, navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <AntDesign
      name="shoppingcart"
      size={32}
      onPress={() => navigation.navigate("Cart")}
    />
  </View>
);

export default CustomTitle;
