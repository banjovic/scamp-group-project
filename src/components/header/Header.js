import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Cart } from "../../assets/Cart.svg";
import { CartContext } from "../../context/cart/cart.context";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { itemsCount } = useContext(CartContext);
  let navigate = useNavigate();

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Products", link: "/products" },
  ];

  return (
    <header className="relative container mx-auto px-5 py-2.5 flex items-center">
      <h1
        className="text-logo-sm text-gold
       font-700 flex-1 md:text-logo-lg"
      >
        <Link to="/">Scribbs</Link>
      </h1>
      <nav className="hidden md:block">
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="mr-20 text-xl text-lightGold opacity-50 hover:opacity-100"
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="relative w-7 h-7 mr-4 cursor-pointer">
        <Cart
          className="w-full h-full"
          onClick={() => {
            navigate("/cart");
            isOpen && setIsOpen(!isOpen);
          }}
        />
        <div className="w-4 h-4 bg-lightGold rounded-full absolute top-[-4px] right-[-8px] grid place-items-center">
          <span className="text-darkGrey text-xs font-semibold">
            {itemsCount}
          </span>
        </div>
      </div>

      <button
        className={`w-11 flex flex-col gap-y-3.5 ${
          isOpen && "menu-icon--open"
        } md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="inline-block w-full h-0.5 bg-gold"></span>
        <span className="inline-block w-full h-0.5 bg-gold"></span>
      </button>

      <nav
        className={`fixed top-[72px] left-0 z-10 w-full pt-12 h-full -translate-x-full transition-transform ${
          isOpen && "active"
        } bg-darkGrey md:hidden`}
      >
        <div className="container space-y-11 mx-auto px-5">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="block text-4xl text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
