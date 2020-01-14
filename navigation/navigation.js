import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ShopScreen from "../screens/shop-screen/shop-screen.component";
import CartScreen from "../screens/cart-screen/cart-screen.component";

const RootStack = createStackNavigator(
  {
    Home: ShopScreen,
    Cart: CartScreen
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#9f1d35"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
