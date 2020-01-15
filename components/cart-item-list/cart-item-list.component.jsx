import React from "react";
import { View } from "react-native";

import CartItem from "../cart-item/cart-item.component";

import { styles } from "./cart-item-list.styles";

const CartItemList = ({ cartItems }) => (
  <View style={styles.container}>
    {cartItems.map(({ name, price }) => (
      <CartItem key={Math.random() * 1000} name={name} price={price} />
    ))}
  </View>
);

export default CartItemList;
