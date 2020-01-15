import React from "react";
import { View } from "react-native";

import CartItem from "../cart-item/cart-item.component";

const CartItemList = ({ cartItems }) => (
  <View>
    {cartItems.map(({ id, name, price }) => (
      <CartItem key={id} name={name} price={price} />
    ))}
  </View>
);

export default CartItemList;
