import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

import { ReactComponent as BathBowl } from "../../assets/Bath bowl.svg";

import { CartContext } from "../../context/cart/cart.context";

const Cart = () => {
  const {
    cartItems,
    clearItemFromCart,
    decreaseItemInCart,
    increaseItemInCart,
    clearCart,
    total,
  } = useContext(CartContext);

  const config = {
    reference: new Date().getTime().toString(),
    email: "johnDoe@gmail.com",
    amount: total * 100,
    publicKey: "pk_test_cf22779830ec46ef8f81416b3dda2123c6a96b70",
  };

  const onSuccess = () => {
    clearCart();
    navigate("/");
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  let navigate = useNavigate();

  return (
    <>
      <h1 className="text-center text-6xl text-darkGrey font-normal mt-10">
        Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="w-full h-[60vh] px-5 pt-12 flex flex-col justify-center items-center">
          <BathBowl />
          <p className=" mb-6">Looks like your cart is empty.</p>
          <button
            className="w-full border-none outline-none bg-darkGold text-darkGrey py-3 px-[10px] max-w-[300px]"
            onClick={() => navigate("/")}
          >
            Go back to Shop
          </button>
        </div>
      ) : (
        <div className="space-y-5 w-11/12 mx-auto my-8 flex flex-col">
          <div className="bg-transparent px-4 pb-4">
            <div className="hidden md:grid grid-cols-4 place-items-center py-2 border-b-[2px] border-solid border-darkGold">
              {["Products", "Price", "Quantity", "Total"].map(
                (title, index) => (
                  <h2
                    key={index}
                    className="font-600 uppercase text-sm text-darkGold"
                  >
                    {title}
                  </h2>
                )
              )}
            </div>
            {cartItems.map((cartItem) => {
              const { id, name, imageSrc, price, quantity } = cartItem;
              return (
                <div
                  key={id}
                  className="pt-5 pb-2 grid grid-cols-3 gap-y-2 border-b-[1px] border-lightGold/30 last:border-b-0 md:grid-cols-4 md:place-items-center"
                >
                  <div className="justify-self-start col-span-3 flex gap-3 md:col-span-1 md:order-1">
                    <img
                      src={imageSrc}
                      alt="Bath bomb"
                      className="max-w-[80px] w-full h-[60px]"
                    />
                    <h3 className="uppercase font-normal text-base text-lightGrey">
                      {name}
                    </h3>
                  </div>
                  <span className="hidden md:block  md:order-2 text-lightGrey">
                    NGN {price}
                  </span>
                  <button
                    className="underline underline-offset-2 uppercase text-sm md:order-5 md:justify-self-start cursor-pointer text-lightGrey hover:text-darkGold"
                    onClick={() => clearItemFromCart(cartItem)}
                  >
                    remove
                  </button>
                  <div className="justify-self-start border border-darkGold px-2 py-[2px] space-x-4 md:justify-self-center md:order-3 text-darkGold">
                    <button onClick={() => decreaseItemInCart(cartItem)}>
                      -
                    </button>
                    <span className="text-lightGrey">{quantity}</span>
                    <button onClick={() => increaseItemInCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <span className="justify-self-center md:order-4 text-lightGrey">
                    NGN {price * quantity}
                  </span>
                </div>
              );
            })}
          </div>
          <h4 className="self-end text-darkGold">
            Total: <span>NGN {total}</span>
          </h4>
          <button
            className="bg-darkGold hover:bg-darkGold/60 px-3 h-[50px] max-w-[350px] w-full self-end uppercase font-semibold"
            onClick={() => initializePayment(onSuccess, onClose)}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
