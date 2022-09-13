export const initialState = {
  cartItems: [],
  itemsCount: 0,
  total: 0,
};

export const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };
    default:
      throw new Error(`${type} not found`);
  }
};

export default cartReducer;
