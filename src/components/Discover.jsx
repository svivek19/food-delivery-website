import React from "react";
import img from "../assets/1.jpg";
import { FaArrowRight } from "react-icons/fa";

const Discover = () => {
  return (
    <div className="my-14 w-5/6 mx-auto text-center text-3xl font-medium text-[#52321b]">
      <div>
        <h1>Uncover Your Essential Cravings with Our Vbite!</h1>
      </div>

      <div className="grid gap-10 my-20 grid-cols-3">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition-all">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*sqvxzFwn2mVg77SEQE_3Vg.jpeg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-lg font-medium text-center"
            >
              Pizza
              <FaArrowRight className="ml-1 mt-1 text-xs" />
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
            >
              Pizza
              <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <a href="#">
            <img className="rounded-t-lg" src={img} alt="" />
          </a>
          <div className="p-5">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
            >
              Pizza
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
