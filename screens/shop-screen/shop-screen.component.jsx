import React from "react";
import { ScrollView, Text, ToastAndroid } from "react-native";

import { SHOP_DATA } from "./shop.data";

import CustomTitle from "../../components/custom-title/custom-title.component";
import ShopItemList from "../../components/shop-item-list/shop-item-list.component";

import { styles } from "./shop-screen.styles";

class ShopScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: SHOP_DATA, cart: [] };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => (
        <CustomTitle title="Shop" navigation={navigation} destination="Cart" />
      )
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({ cart: this.state.cart });
  }

  onCartChange = newCart => {
    this.props.navigation.setParams({ cart: newCart });
    this.setState({ cart: newCart }, () =>
      ToastAndroid.show("Item Added", ToastAndroid.SHORT)
    );
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>{this.state.cart.length}</Text>
        <Text style={styles.header}>Welcome to my shop!</Text>
        <ShopItemList
          items={SHOP_DATA}
          cart={this.state.cart}
          cartChange={this.onCartChange}
        />
      </ScrollView>
    );
  }
}

export default ShopScreen;
