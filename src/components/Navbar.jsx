import React, { useState, useEffect } from "react";
import Logo from "../assets/brandLogo.png";
// icons
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-[#f1f1f1] ${
        isScrolled ? "fixed top-0" : "absolute top-10"
      } w-full z-50`}
    >
      <div className="flex justify-around items-center px-4 md:px-0">
        <div>
          <img src={Logo} alt="brand logo" width={70} />
        </div>
        <div className="hidden md:flex space-x-8 my-5 text-lg">
          <ul className="flex space-x-5">
            <Link to={"/"} className="text-[#52321b] cursor-pointer">
              Home
            </Link>
            <Link to={"/pizza"} className="text-[#52321b] cursor-pointer">
              Pizza
            </Link>
            <Link to={"burger"} className="text-[#52321b] cursor-pointer">
              Burger
            </Link>
            <Link to={"noodles"} className="text-[#52321b] cursor-pointer">
              Noodle's
            </Link>
          </ul>
        </div>
        <div className="text-3xl my-5 space-x-5 flex">
          <CiUser className="text-[#52321b] cursor-pointer" />
          <Link to={"/cartitems"}>
            <CiShoppingCart className="text-[#52321b] cursor-pointer" />
          </Link>
        </div>

        <div className="md:hidden">
          <HiMenu
            className="text-[#52321b] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center justify-center px-4">
          <ul className="my-4 text-lg space-y-4">
            <li>
              <Link
                to={"/"}
                onClick={toggleMenu}
                className="text-[#52321b] cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/pizza"}
                onClick={toggleMenu}
                className="text-[#52321b] cursor-pointer"
              >
                Pizza
              </Link>
            </li>
            <li>
              <Link
                to={"/burger"}
                onClick={toggleMenu}
                className="text-[#52321b] cursor-pointer"
              >
                Burger
              </Link>
            </li>
            <li>
              <Link
                to={"/noodles"}
                onClick={toggleMenu}
                className="text-[#52321b] cursor-pointer"
              >
                Noodle's
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
