import React from "react";
import { View, ScrollView, Text, Button, Alert } from "react-native";

import CartItemList from "../../components/cart-item-list/cart-item-list.component";

import { styles } from "./cart-screen.styles";

class CartScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Cart"
    };
  };

  handleCheckout = () => {
    this.props.navigation.setParams({ cart: [] });
    Alert.alert("Payment Successful");
  };
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        {navigation.getParam("cart", "NO CART").length ? (
          <View>
            <CartItemList cartItems={navigation.getParam("cart", "NO CART")} />
            <Text
              style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
            >
              Total: ${" "}
              {navigation
                .getParam("cart", "NO CART")
                .reduce((acc, item) => acc + item.price, 0)}
            </Text>
            <View style={styles.button}>
              <Button title="CHECKOUT" onPress={this.handleCheckout} />
            </View>
          </View>
        ) : (
          <Text
            style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}
          >
            Your cart is empty
          </Text>
        )}
      </ScrollView>
    );
  }
}

export default CartScreen;
