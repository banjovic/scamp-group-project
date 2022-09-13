import { createContext, useReducer } from "react";

import cartReducer, { CART_ACTIONS_TYPES, initialState } from "./cart.reducer";
import {
  addCartItem,
  clearItem,
  decreaseItemQuantity,
  IncreaseItemQuantity,
} from "./cart.utils";

const defaultValue = {
  cartItems: [],
  addItemToCart: () => {},
  clearItemFromCart: () => {},
  decreaseItemInCart: () => {},
  IncreaseItemInCart: () => {},
  itemsCount: 0,
  total: 0,
};

export const CartContext = createContext(defaultValue);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { cartItems, itemsCount, total } = state;

  const updateCartItems = (cartItems) => {
    const newCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price
    );

    dispatch({
      type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems,
        itemsCount: newCount,
        total: newTotal,
      },
    });
  };

  const addItemToCart = (productToAdd, quantity) => {
    const newCartItems = addCartItem(cartItems, productToAdd, quantity);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItem) => {
    const newCartItems = clearItem(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const decreaseItemInCart = (cartItem) => {
    const newCartItems = decreaseItemQuantity(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const increaseItemInCart = (cartItem) => {
    const newCartItems = IncreaseItemQuantity(cartItems, cartItem);
    updateCartItems(newCartItems);
  };

  const value = {
    addItemToCart,
    clearItemFromCart,
    decreaseItemInCart,
    increaseItemInCart,
    cartItems,
    itemsCount,
    total,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
