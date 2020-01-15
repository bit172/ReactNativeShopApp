import React from "react";
import { View } from "react-native";

import ShopItem from "../shop-item/shop-item.component";

import { styles } from "./shop-item-list.styles";

const ShopItemList = ({ items, cart, cartChange }) => {
  const onAddItem = cart => {
    cartChange(cart);
  };

  return (
    <View style={styles.container}>
      {items.map(item => (
        <ShopItem key={item.id} item={item} cart={cart} addItem={onAddItem} />
      ))}
    </View>
  );
};

export default ShopItemList;
