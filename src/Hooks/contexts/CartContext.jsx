import React, { createContext, useContext, useState } from "react";

const cartContext = createContext();

function CartProvider({ children }) {
  const initialCartState = {
    totalAmount: 0,
    numberOfItems: 0,
    cartItems: [],
  };
  const [cartItems, setCartItems] = useState(initialCartState);

  const cartItemsCount = cartItems.numberOfItems;

  return (
    <cartContext.Provider
      value={{
        totalAmount: cartItems.totalAmount,
        numberOfItems: cartItems.numberOfItems,
        cartItems: cartItems.cartItems,
        setCartItems,
        cartItemsCount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

function useCart() {
  const context = useContext(cartContext);
  if (context === undefined)
    throw new Error("context was used outside of CartProvider component");
  return context;
}
export { CartProvider, useCart };
