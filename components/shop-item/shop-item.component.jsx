import React, { useContext, useEffect } from "react";
import { View, Text, Image, ToastAndroid } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./shop-item.styles";
import CartContext from "../../context/cart.context";

const ShopItem = props => {
  const { name, price, description, imageUrl } = props.item;

  const { setCart } = useContext(CartContext);

  const addToCart = item => {
    setCart(c => {
      if (Platform.OS === "android")
        ToastAndroid.show("Item Added", ToastAndroid.SHORT);
      return c.concat([item]);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={{ width: 56, height: 56 }} source={imageUrl} />
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
          onPress={() => {
            addToCart(props.item);
          }}
        />
        <Text>Add to cart</Text>
      </View>
    </View>
  );
};

export default ShopItem;
