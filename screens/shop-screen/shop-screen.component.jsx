import React from "react";
import { View, Text } from "react-native";

import CustomTitle from "../../components/custom-title/custom-title.component";

class ShopScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: () => (
        <CustomTitle title="Shop" navigation={navigation} destination="Cart" />
      )
    };
  };

  render() {
    return (
      <View>
        <Text>Welcome to my shop!</Text>
      </View>
    );
  }
}

export default ShopScreen;
