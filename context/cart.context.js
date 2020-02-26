import { createContext } from "react";

export const CartContext = createContext(null);

export const CartProvider = CartContext.Provider;
export const CartConsumer = CartContext.Consumer;

export default CartContext;
