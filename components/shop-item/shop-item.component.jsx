import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./shop-item.styles";

const ShopItem = props => {
  const { name, price, description } = props.item;

  const handleChange = item => {
    props.cart.push(item);
    props.addItem(props.cart);
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/icon.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text>$ {price}</Text>
        <Text>{description}</Text>
      </View>
      <View style={styles.addTocart}>
        <AntDesign
          name="pluscircleo"
          size={32}
          style={{ textAlign: "center" }}
          onPress={handleChange}
        />
        <Text>Add to cart</Text>
      </View>
    </View>
  );
};

export default ShopItem;
