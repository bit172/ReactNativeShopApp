import React from "react";
import { ScrollView, Text, Platform, ToastAndroid, Alert } from "react-native";

import { SHOP_DATA } from "./shop.data";

import { CartConsumer } from "./../../context/cart.context";

import CustomTitle from "../../components/custom-title/custom-title.component";
import ShopItemList from "../../components/shop-item-list/shop-item-list.component";

import { styles } from "./shop-screen.styles";

class ShopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: SHOP_DATA, cart: [] };
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: () => (
        <CustomTitle title="Shop" navigation={navigation} destination="Cart" />
      )
    };
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <CartConsumer>
          {props => (
            <Text style={styles.header}>Total Items: {props.cart.length}</Text>
          )}
        </CartConsumer>
        <Text style={styles.header}></Text>
        <Text style={styles.header}>Welcome to my shop!</Text>
        <ShopItemList items={SHOP_DATA} />
      </ScrollView>
    );
  }
}

export default ShopScreen;
