import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/cart/cart.context";
import { ReactComponent as Cart } from "../../assets/Cart.svg";
import ToastNotification from "../toastNotification/ToastNotification";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  // useState for the toast notification
  const [show, setShow] = useState(false);

  return (
    <div className="max-w-xs w-full mx-auto">
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        href={product.href}
        className="group"
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-60 w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-lightGrey">{product.name}</h3>
      </Link>
      <div className="flex justify-between">
        <p className="mt-1 text-lg font-medium text-lightGold">
          NGN {product.price}
        </p>
        <Cart
          className="cursor-pointer w-6 h-6"
          onClick={() => {
            addItemToCart(product, 1);
            setShow(true);
          }}
        />
      </div>

      <ToastNotification setShow={setShow} show={show} />
    </div>
  );
};

export default ProductCard;
