import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/brandLogo.png";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { HiMenu } from "react-icons/hi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const foodItem = useSelector((state) => state.cart.items);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const shouldHaveBorder = (pathname) => {
    return location.pathname === pathname
      ? "border-b border-b-slate-700 border-solid"
      : "";
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
            <Link
              to={"/"}
              className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                "/"
              )}`}
            >
              Home
            </Link>
            <Link
              to={"/pizza"}
              className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                "/pizza"
              )}`}
            >
              Pizza
            </Link>
            <Link
              to={"/burger"}
              className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                "/burger"
              )}`}
            >
              Burger
            </Link>
            <Link
              to={"/noodles"}
              className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                "/noodles"
              )}`}
            >
              Noodle's
            </Link>
          </ul>
        </div>
        <div className="text-3xl my-5 space-x-5 flex">
          <Link to={"/auth"}>
            <CiUser className="text-[#52321b] cursor-pointer" />
          </Link>
          <Link to={"/cartitems"}>
            <div className="flex text-[#52321b]">
              <CiShoppingCart className="cursor-pointer" />
              <span className="text-base">{`(${foodItem.length})`}</span>
            </div>
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
                className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/pizza"}
                onClick={toggleMenu}
                className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                  "/pizza"
                )}`}
              >
                Pizza
              </Link>
            </li>
            <li>
              <Link
                to={"/burger"}
                onClick={toggleMenu}
                className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                  "/burger"
                )}`}
              >
                Burger
              </Link>
            </li>
            <li>
              <Link
                to={"/noodles"}
                onClick={toggleMenu}
                className={`text-[#52321b] cursor-pointer ${shouldHaveBorder(
                  "/noodles"
                )}`}
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
