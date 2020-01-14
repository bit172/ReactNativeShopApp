import React from "react";
import { View, Text } from "react-native";

class CartScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Cart"
    };
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    );
  }
}

export default CartScreen;
