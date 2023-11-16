import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-gray-50 p-5 shadow shadow-gray-300 z-20 fixed top-0 w-screen md:flex md:items-center md:justify-between">
      <div className="flex items-center">
        <span className="text-2xl text-custom-blue cursor-pointer">
          <img className="h-16 inline" src="images/spoon-and-fork-restaurant-logo_212966-original.webp" alt="Logo" />
        </span>
        <span>
            <h1 className="text-custom-lightorange text-2xl font-bold">Plum Chef</h1>
        </span>
        {/* <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </span> */}
      </div>

      {/* <ul
        className={`md:flex md:items-center z-50 md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 transition-all ease-in duration-1000 ${
          menuOpen ? "opacity-100 top-[80px]" : "opacity-100 top-[-800px]"
        }`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="text-md text-custom-blue hover:text-cyan-500 duration-500"
          >
            Home
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="text-md text-custom-blue hover:text-cyan-500 duration-500"
          >
            About us
          </a>
        </li>
        <li
          className="mx-4 my-6 md:my-0"
        >
          <a
            href="#"
            className="text-md text-custom-blue hover:text-cyan-500 duration-500"
          >
            Courses
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="text-md text-custom-blue hover:text-cyan-500 duration-500"
          >
            Contact us
          </a>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="text-md text-custom-blue hover:text-cyan-500 duration-500"
          >
            Login
          </a>
        </li>

        <button className="bg-custom-lightorange text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-gray-700 rounded">
          Get started
        </button>
      </ul> */}
    </nav>
  );
};

export default Navbar;