import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdPayment } from "react-icons/md";
import { clearCart } from "../reducers/cartReducer";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToken = (token) => {
    console.log(token);
    dispatch(clearCart());
    navigate("/");
    setTimeout(() => {
      alert("completed");
    }, 2000);
  };

  const [formErrors, setFormErrors] = useState({
    fullName: true,
    number: true,
    Address: true,
    city: true,
    postcode: true,
  });

  const validateForm = () => {
    const errors = {
      fullName: formErrors.fullName,
      number: formErrors.number,
      Address: formErrors.Address,
      city: formErrors.city,
      postcode: formErrors.postcode,
    };

    for (const key in errors) {
      if (errors[key]) {
        return false;
      }
    }

    return true;
  };

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const calculateTotalPrice = () => {
    return subtotal + 30;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBtn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mt-24 mx-5">
      <div className="flex flex-col md:w-10/12 mx-auto">
        <div>
          <div className="md:grid md:grid-cols-2">
            <div className="mb-5">
              <h2
                className="mb-8 font-bold text-xl md:text-center text-[#52321b]"
                data-aos="fade-up"
              >
                Order Summery
              </h2>
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((cart) => (
                  <div key={cart.id} className="flex" data-aos="fade-up">
                    <div className="w-24 h-14">
                      <img
                        src={cart.image}
                        alt={cart.name}
                        className="object-fill w-full h-full rounded-md"
                      />
                    </div>
                    <div className="mx-3">
                      <div className="font-semibold text-[#52321b]">
                        <span className="hidden md:block">
                          {cart.name.length > 20
                            ? cart.name.slice(0, 28) + "..."
                            : cart.name}
                        </span>

                        <span className="block md:hidden">
                          {cart.name.length > 20
                            ? cart.name.slice(0, 20) + "..."
                            : cart.name}
                        </span>
                      </div>
                      <div className="text-red-500 font-medium my-2">
                        Price:{" "}
                        <span className="text-[#52321b] font-normal">
                          Rs. {cart.price}
                        </span>
                        <span className="text-[#52321b] mx-4">
                          Quantity: {cart.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="text-xl font-semibold mb-10 md:mb-0 text-[#52321b]"
                  data-aos="fade-up"
                >
                  No items in the cart
                </div>
              )}
            </div>
            <div>
              <h2
                className="mb-8 font-bold text-lg md:text-xl text-start text-[#52321b]"
                data-aos="fade-up"
              >
                ITEMS
                {`(${
                  cartItems && cartItems.length > 0 ? cartItems.length : 0
                })`}
              </h2>
              <div className=" font-semibold text-[#52321b]" data-aos="fade-up">
                <h3 className="mb-3">Subtotal: Rs. {subtotal}</h3>
                <h3 className="mb-3 text-[#52321b]">Shipping Charge: Rs. 30</h3>
                <hr></hr>
                <h3 className="mt-3 mb-3 text-[#52321b]">
                  Total: Rs. {calculateTotalPrice()}
                </h3>
                <hr className="mb-5"></hr>
              </div>
            </div>
          </div>
        </div>
        <h2
          className="mb-4 font-bold text-xl text-[#52321b]"
          data-aos="fade-up"
        >
          Shipping Address
        </h2>
        <form className="justify-center w-full mx-auto" data-aos="fade-up">
          <div>
            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="fullName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm outline-none"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      fullName: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.fullName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your full name.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="number"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Mobile Number
                </label>
                <input
                  id="number"
                  type="number"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm outline-none"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      number: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Mobile Number.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full">
                <label
                  htmlFor="Address"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Address
                </label>
                <textarea
                  id="Address"
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm outline-none"
                  name="Address"
                  cols="20"
                  rows="3"
                  placeholder="Address"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      Address: e.target.value.trim() === "",
                    });
                  }}
                ></textarea>
                {formErrors.Address && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Address.
                  </p>
                )}
              </div>
            </div>
            <div className="space-x-0 mt-2 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="city"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm outline-none"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      city: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.city && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your City.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="postcode"
                  className="block mb-3 mt-3 md:mt-0 text-sm font-semibold text-gray-500"
                >
                  Postcode
                </label>
                <input
                  id="postcode"
                  type="number"
                  minLength={6}
                  maxLength={6}
                  placeholder="Post Code"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm outline-none"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      postcode: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.postcode && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Postcode.
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center mt-4">
              <label htmlFor="tick" className="flex items-center text-sm group">
                <input
                  id="tick"
                  type="checkbox"
                  className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1 cursor-pointer"
                />
                <span className="ml-2">
                  Save this information for next time
                </span>
              </label>
            </div>
            <div className="my-6">
              <StripeCheckout
                token={handleToken}
                stripeKey={import.meta.env.VITE_STRIPE_KEY}
                amount={calculateTotalPrice() * 100}
                name="Vivek Programmer"
                email="svivek030503@gmail.com"
                description="Payment using stripe checkout"
                currency="INR"
              >
                <button
                  onClick={handleBtn}
                  className={`rounded-md bg-[#3b2312] py-2 px-5 font-medium flex justify-center text-[#f1eeeb] hover:bg-[#643e23] transition-all items-center space-x-3 ${
                    validateForm() ? "" : "not-allowed-to-click"
                  }`}
                  disabled={!validateForm()}
                  title={!validateForm() ? "Please fill all fields" : ""}
                >
                  <span className="text-lg">Proceed To Pay</span>
                  <MdPayment className="text-xl" />
                </button>
              </StripeCheckout>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
