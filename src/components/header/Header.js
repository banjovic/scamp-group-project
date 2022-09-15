import { useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";

import { ReactComponent as Cart } from "../../assets/Cart.svg";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let navigate = useNavigate();

  const isMatched = useMatch("/cart");

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#" },
    { title: "Products", link: "/products" },
  ];

  return (
    <header className="relative container mx-auto px-5 py-2.5 flex items-center">
      <h1
        className={`text-logo-sm ${
          isMatched ? "text-darkGrey" : "text-gold"
        } font-700 flex-1 md:text-logo-lg`}
      >
        <Link to="/">Logo</Link>
      </h1>
      <nav className="hidden md:block">
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={`mr-20 text-xl ${
              isMatched
                ? "text-darkGrey opacity-70"
                : "text-lightGold opacity-50"
            } hover:opacity-100`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <Cart
        className={`w-7 h-7 mr-4 cursor-pointer ${
          isMatched && "[&_path]:stroke-darkGrey"
        }`}
        onClick={() => {
          navigate("/cart");
          setIsOpen(!isOpen);
        }}
      />

      <button
        className={`w-11 flex flex-col gap-y-3.5 ${
          isOpen && "menu-icon--open"
        } md:hidden`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`inline-block w-full h-0.5 ${
            isMatched ? "bg-darkGrey" : "bg-gold"
          }`}
        ></span>
        <span
          className={`inline-block w-full h-0.5 ${
            isMatched ? "bg-darkGrey" : "bg-gold"
          }`}
        ></span>
      </button>

      <nav
        className={`${isOpen ? "active" : ""} fixed left-0 z-10 w-full pt-12 ${
          isMatched ? "bg-white" : "bg-darkGrey"
        } menu-items--mobile md:hidden`}
      >
        <div className="container space-y-11 mx-auto px-5">
          {menuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className={`block text-4xl ${
                isMatched ? "text-darkGrey" : "text-white"
              }`}
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
