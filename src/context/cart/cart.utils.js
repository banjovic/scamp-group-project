//add items to cart
export const addCartItem = (cartItems, itemToAdd, quantity) => {
  const cartItemExists = cartItems.find((item) => item.id === itemToAdd.id);

  if (cartItemExists) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity }];
};
//increase item in cart
export const IncreaseItemQuantity = (cartItems, itemToIncrease) => {
  const cartItemExists = cartItems.find(
    (item) => item.id === itemToIncrease.id
  );

  if (cartItemExists) {
    return cartItems.map((item) =>
      item.id === itemToIncrease.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
};

//decrement item in cart
export const decreaseItemQuantity = (cartItems, itemToRemove) => {
  const cartItemExists = cartItems.find((item) => item.id === itemToRemove.id);

  if (cartItemExists.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

//clear item from cart
export const clearItem = (cartItems, itemToRemove) =>
  cartItems.filter((item) => item.id !== itemToRemove.id);
