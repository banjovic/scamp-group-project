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
          <p className="text-black mb-6">Looks like your cart is empty.</p>
          <button
            className="w-full border-none outline-none bg-darkGold text-darkGrey py-3 px-[10px] max-w-[300px]"
            onClick={() => navigate("/")}
          >
            Go back to Shop
          </button>
        </div>
      ) : (
        <div className="space-y-5 w-11/12 mx-auto my-8 flex flex-col">
          <div className="bg-veryLightGrey px-4">
            <div className="hidden md:grid grid-cols-4 place-items-center py-2 border-b-[1px] border-solid border-black">
              <h2 className="font-normal uppercase text-sm">Product</h2>
              <h2 className="font-normal uppercase text-sm">Price</h2>
              <h2 className="font-normal uppercase text-sm">Quantity</h2>
              <h2 className="font-normal uppercase text-sm">Total</h2>
            </div>
            {cartItems.map((cartItem) => {
              const { id, name, imgUrl, description, price, quantity } =
                cartItem;
              return (
                <div
                  key={id}
                  className="pt-5 pb-2 grid grid-cols-3 gap-y-2 border-b-[1px] border-grey last:border-b-0 md:grid-cols-4 md:place-items-center"
                >
                  <div className="col-span-3 flex gap-3 md:col-span-1 md:order-1">
                    <img src={imgUrl} alt="Bath bomb" height={80} width={80} />
                    <div>
                      <h3 className="uppercase font-normal text-base">
                        {name}
                      </h3>
                      <p className="text-darkGrey text-sm">{description}</p>
                    </div>
                  </div>
                  <span className="hidden md:block  md:order-2">
                    NGN {price}
                  </span>
                  <span
                    className="underline underline-offset-2 uppercase text-sm md:order-5 md:justify-self-start cursor-pointer"
                    onClick={() => clearItemFromCart(cartItem)}
                  >
                    remove
                  </span>
                  <div className="justify-self-center border border-darkGrey px-2 py-[2px] space-x-4 md:order-3">
                    <button onClick={() => decreaseItemInCart(cartItem)}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => increaseItemInCart(cartItem)}>
                      +
                    </button>
                  </div>
                  <span className="justify-self-center  md:order-4">
                    NGN {price * quantity}
                  </span>
                </div>
              );
            })}
          </div>
          <h4 className="self-end">
            Total: <span>NGN {total}</span>
          </h4>
          <button
            className="bg-darkGold px-3 h-[50px] max-w-[350px] w-full self-end uppercase font-semibold"
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
