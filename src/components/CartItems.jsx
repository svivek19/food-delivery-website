import React from "react";
import img1 from "../assets/discover/burger.jpg";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";

const CartItems = () => {
  return (
    <div>
      <h1 className="mb-10 text-center text-2xl font-bold text-[#52321b]">
        Cart Items
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img
              src={img1}
              alt="product-image"
              className="w-full rounded-lg sm:w-40"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-[#52321b]">
                  Nike Air Max 2019
                </h2>
                <p className="mt-1 text-base mb-4 text-[#5c4432]">$534</p>
                <p className="text-[#52321b] font-semibold">Total:</p>
                <p className="text-base text-[#5c4432]">259.000 ₭</p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex space-x-4 items-center border-gray-100">
                  <button className="cursor-pointer rounded-l bg-red-200 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50">
                    <FaMinus />
                  </button>
                  <p className="text-[#52321b]">0</p>
                  <div className="cursor-pointer rounded-r bg-green-200 py-1 px-3 duration-100 hover:bg-green-500 hover:text-white">
                    <IoMdAdd />
                  </div>
                </div>
                <div className="text-center text-4xl pt-0 md:pt-5 text-[#52321b]">
                  <MdOutlineDelete className=" mx-0 md:mx-6 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sub total */}
        <div className=" my-10 md:my-24 pb-10 mb:pb-16 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-[#52321b]">Subtotal</p>
            <p className="text-[#5c4432]">Rs. 530</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#52321b]">Shipping</p>
            <p className="text-[#5c4432]">Rs. 30</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-[#52321b]">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-[#52321b]">Rs. 134</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-[#52321b] py-1.5 font-medium text-[#f1eeeb] hover:bg-[#643e23] transition-all">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
