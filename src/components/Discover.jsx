import React from "react";
import { FaArrowRight } from "react-icons/fa";

import pizza from "../assets/discover/pizza.jpg";
import burger from "../assets/discover/burger.jpg";
import noodles from "../assets/discover/noodles.jpg";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="my-14 w-5/6 mx-auto text-center text-3xl font-medium text-[#52321b]">
      <div data-aos="fade-up">
        <h1>Uncover Your Essential Cravings with Our Vbite!</h1>
      </div>

      <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide">
        <div className="flex justify-around gap-10 my-20">
          <div
            className="w-full md:w-11/12 bg-white border border-gray-200 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            data-aos="fade-up"
          >
            <div>
              <img
                className="rounded-t-lg max-w-48 md:max-w-full"
                src={pizza}
                alt="pizza"
              />
            </div>
            <div className="p-5">
              <Link
                to={"/pizza"}
                className="inline-flex items-center px-3 py-2 text-xl font-medium text-center"
              >
                Pizza
                <FaArrowRight className="ml-1 mt-1 text-xs" />
              </Link>
            </div>
          </div>

          <div
            className="w-full md:w-11/12 bg-white border border-gray-200 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            data-aos="fade-up"
          >
            <div>
              <img
                className="rounded-t-lg  max-w-48 md:max-w-full"
                src={burger}
                alt="burger"
              />
            </div>
            <div className="p-5">
              <Link
                to={"/burger"}
                className="inline-flex items-center px-3 py-2 text-xl font-medium text-center"
              >
                Burger
                <FaArrowRight className="ml-1 mt-1 text-xs" />
              </Link>
            </div>
          </div>

          <div
            className="w-full md:w-11/12 bg-white border border-gray-200 rounded-xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all"
            data-aos="fade-up"
          >
            <div>
              <img
                className="rounded-t-lg max-w-48 md:max-w-full"
                src={noodles}
                alt="noodles"
              />
            </div>
            <div className="p-5">
              <Link
                to={"/noodles"}
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center"
              >
                Noodle's
                <FaArrowRight className="ml-1 mt-1 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
