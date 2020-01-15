import React from "react";
import { View, Text } from "react-native";

class CartScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Cart"
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
}

export default CartScreen;
