import React from "react";
import { View, ScrollView, Text, Button, Alert } from "react-native";

import CartItemList from "../../components/cart-item-list/cart-item-list.component";

import { styles } from "./cart-screen.styles";

import CartContext, { CartConsumer } from "./../../context/cart.context";

class CartScreen extends React.Component {
  static contextType = CartContext;

  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Cart"
    };
  };

  handleCheckout = () => {
    const { setCart } = this.context;
    setCart(() => []);
    Alert.alert("Payment Successful");
  };

  render() {
    const { navigation } = this.props;
    return (
      <CartConsumer>
        {props => {
          return (
            <ScrollView>
              {props.cart.length ? (
                <View>
                  <CartItemList cartItems={props.cart} />
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 22,
                      textAlign: "center"
                    }}
                  >
                    Total: ${" "}
                    {props.cart.reduce((acc, item) => acc + item.price, 0)}
                  </Text>
                  <View style={styles.button}>
                    <Button title="CHECKOUT" onPress={this.handleCheckout} />
                  </View>
                </View>
              ) : (
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 22,
                    textAlign: "center"
                  }}
                >
                  Your cart is empty
                </Text>
              )}
            </ScrollView>
          );
        }}
      </CartConsumer>
    );
  }
}

export default CartScreen;
