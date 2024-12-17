import React from "react";
import logo from "../images/food.png";
import { Link } from "react-router-dom";

const navlinks = [
  { name: "HOME", href: "/home", current: false },
  { name: "MENU", href: "/", current: true },
  { name: "MAKE A RESERVATION", href: "/reservation", current: false },
  { name: "CONTACT US", href: "/contact", current: false },
];

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex flex-1 text-lg font-bold items-center justify-center sm:items-stretch sm:justify-start">
          <span>
            <img alt="amal" src={logo} className="h-8 w-auto" />
          </span>
          <h2 className="hidden sm:ml-6 sm:block">Menu App</h2>
        </div>
        <div className="hidden md:flex space-x-6">
          {navlinks.map((link) => (
            <Link
              to={link.href}
              className={link.current ? "text-blue-700" : "text-white"}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
