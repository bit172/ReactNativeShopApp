import React from "react";
import { View, ScrollView, Text } from "react-native";
import CartItemList from "../../components/cart-item-list/cart-item-list.component";

class CartScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    return {
      title: "Cart"
    };
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
          </View>
        ) : (
          <Text>Your cart is empty</Text>
        )}
      </ScrollView>
    );
  }
}

export default CartScreen;
