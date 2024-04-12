import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../reducers/cartReducer";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cart.items);
  const [isLogin, setIsLogin] = useState(false);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  const subtotal = cartItem.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      }
    });
    return unsubscribe;
  }, []);

  const handleCheckout = () => {
    if (!isLogin) {
      toast.warning("Please authenticate to continue", {
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/auth");
      }, 2000);
    } else {
      if (cartItem.length === 0) {
        toast.info("Your cart is empty. Please add at least one item.", {
          autoClose: 2000,
        });
      } else {
        navigate("/checkout");
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ToastContainer pauseOnHover={false} />
      <h1
        className="m5-10 text-center text-2xl font-bold text-[#52321b]"
        data-aos="fade-up"
      >
        Cart Items {`(${cartItem.length})`}
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 select-none">
          {cartItem.map((food, index) => (
            <div
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              key={index}
              data-aos="fade-up"
            >
              <div className="w-full md:w-1/2">
                <img
                  src={food.image}
                  alt={food.name}
                  className="object-cover w-full h-36 rounded-md"
                />
              </div>
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-[#52321b]">
                    {food.name}
                  </h2>
                  <p className="mt-1 text-base mb-4 text-[#5c4432]">
                    Rs. {food.price}
                  </p>
                  <p className="text-[#52321b] font-semibold">Total:</p>
                  <p className="text-base text-[#5c4432]">
                    Rs. {food.price * food.quantity}
                  </p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex space-x-4 items-center border-gray-100">
                    <button
                      className="cursor-pointer rounded-l bg-red-200 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50"
                      onClick={() => handleDecrease(food.id)}
                    >
                      <FaMinus />
                    </button>
                    <p className="text-[#52321b]">{food.quantity}</p>
                    <div
                      className="cursor-pointer rounded-r bg-green-200 py-1 px-3 duration-100 hover:bg-green-500 hover:text-white"
                      onClick={() => handleIncrease(food.id)}
                    >
                      <IoMdAdd />
                    </div>
                  </div>
                  <div className="text-center text-4xl pt-0 md:pt-5 text-[#52321b]">
                    <MdOutlineDelete
                      className=" mx-0 md:mx-6 cursor-pointer"
                      onClick={() => handleRemove(food.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sub total */}
        <div
          className=" my-10 md:my-32 select-none pb-10 mb:pb-16 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3"
          data-aos="fade-up"
        >
          <div className="mb-2 flex justify-between">
            <p className="text-[#52321b] ">Subtotal</p>
            <p className="text-[#5c4432]">Rs. {subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#52321b]">Shipping</p>
            <p className="text-[#5c4432]">Rs. 30</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-[#52321b]">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold text-[#52321b]">
                Rs. {subtotal + 30}
              </p>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleCheckout}
              className="w-full rounded-md bg-[#52321b] py-2 px-5 font-medium text-[#f1eeeb] hover:bg-[#643e23] transition-all"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
