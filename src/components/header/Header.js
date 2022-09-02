import { useState } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Cart } from "../../assets/Cart.svg";

import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "#" },
    { title: "Products", link: "#" },
  ];

  console.log(isOpen);
  return (
    <header className="relative container mx-auto px-5 py-2.5 flex items-center">
      <h1 className="text-logo-sm text-gold font-700 flex-1 md:text-logo-lg">
        Logo
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
      <div className="w-7 h-7 mr-4">
        <Cart />
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
        className={`${
          isOpen ? "active" : ""
        } absolute left-0 z-10 w-full px-5 pt-12 space-y-11 bg-darkGrey menu-items--mobile md:hidden`}
      >
        {menuItems.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="block text-4xl text-white"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
// focus:outline-none
