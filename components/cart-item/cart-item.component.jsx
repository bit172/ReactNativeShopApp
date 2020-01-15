import React from "react";
import { Text, View } from "react-native";

import { styles } from "./cart-item.styles";

const CartItem = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>$ {price}</Text>
    </View>
  );
};

export default CartItem;
