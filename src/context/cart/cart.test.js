import {
  addCartItem,
  clearItem,
  decreaseItemQuantity,
  IncreaseItemQuantity,
} from "./cart.utils";

let cartItems;

beforeEach(() => {
  cartItems = [
    {
      id: 0,
      name: "bath bomb 1",
      quantity: 4,
    },
  ];
});

afterEach(() => {
  cartItems = [];
});

test("add new item to cart", () => {
  const item2 = {
    id: 1,
    name: "bath bomb 2",
  };
  expect(addCartItem(cartItems, item2, 2)).toContainEqual({
    id: 1,
    name: "bath bomb 2",
    quantity: 2,
  });
});

test("increase item count by adding to cart again", () => {
  expect(
    addCartItem(
      cartItems,
      {
        id: 0,
        name: "bath bomb 1",
      },
      2
    )
  ).toContainEqual({ id: 0, name: "bath bomb 1", quantity: 6 });
});

test("increase quantity of item", () => {
  expect(
    IncreaseItemQuantity(cartItems, {
      id: 0,
      name: "bath bomb 1",
    })
  ).toContainEqual({ id: 0, name: "bath bomb 1", quantity: 5 });
});

test("decrease quantity from cart", () => {
  const items = [
    { id: 0, name: "snow bomb", quantity: 2 },
    { id: 1, name: "spring bomb", quantity: 1 },
  ];

  expect(
    decreaseItemQuantity(cartItems, { id: 0, name: "bath bomb 1" })
  ).toContainEqual({ id: 0, name: "bath bomb 1", quantity: 3 });

  expect(
    decreaseItemQuantity(items, { id: 1, name: "spring bomb" })
  ).toContainEqual({ id: 0, name: "snow bomb", quantity: 2 });
});

test("clear item from cart", () => {
  expect(clearItem(cartItems, { id: 0, name: "bath bomb 1" })).toEqual([]);
});
