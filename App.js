import React, { useState } from "react";

import { CartProvider } from "./context/cart.context";

import AppContainer from "./navigation/navigation";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartProvider value={{ cart, setCart }}>
      <AppContainer />
    </CartProvider>
  );
};

export default App;
