import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./custom-title.styles";

const CustomTitle = ({ title, navigation, destination, cart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <AntDesign
        name="shoppingcart"
        size={32}
        onPress={() => navigation.navigate(destination, { cart: cart })}
      />
    </View>
  );
};

export default CustomTitle;
