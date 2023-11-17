import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  return (
    <nav className="bg-gray-50 p-5 shadow shadow-gray-300 z-20 fixed top-0 w-screen md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <span className="text-2xl text-custom-blue cursor-pointer">
          <img
            className="h-16 inline"
            src="images/spoon-and-fork-restaurant-logo_212966-original.webp"
            alt="Logo"
          />
        </span>
        <span>
          <h1 className="text-custom-lightorange text-2xl font-bold">
            Plum Chef
          </h1>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
