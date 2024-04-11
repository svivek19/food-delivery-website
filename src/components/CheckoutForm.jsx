import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Toast - Alert
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdPayment } from "react-icons/md";

export default function CheckoutForm() {
  const cartItems = useSelector((state) => state.cart.items);

  const [formErrors, setFormErrors] = useState({
    firstName: true,
    lastName: true,
    email: true,
    number: true,
    Address: true,
    city: true,
    postcode: true,
    cardNum: true,
    year: true,
    cvv: true,
  });

  const validateForm = () => {
    const errors = {
      firstName: formErrors.firstName,
      lastName: formErrors.lastName,
      email: formErrors.email,
      number: formErrors.number,
      Address: formErrors.Address,
      city: formErrors.city,
      postcode: formErrors.postcode,
      cardNum: formErrors.cardNum,
      year: formErrors.year,
      cvv: formErrors.cvv,
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

    const isFormValid = validateForm();

    if (isFormValid) {
      toast.success("Form is valid. Proceeding with payment.");
    } else {
      toast.info("Form is invalid. Please fill in all required fields.");
    }
  };

  return (
    <div className="mt-24 mx-5">
      <ToastContainer pauseOnHover={false} />
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
                  htmlFor="firstName"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      firstName: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your first name.
                  </p>
                )}
              </div>
              <div className="w-full lg:w-1/2 ">
                <label
                  htmlFor="lastName"
                  className="block mb-3 text-sm font-semibold text-gray-500 mt-3 md:mt-0"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      lastName: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Last name.
                  </p>
                )}
              </div>
            </div>
            <div className="mt-4 space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="Email"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Email
                </label>
                <input
                  id="Email"
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      email: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Email.
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
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                  className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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
            <div className="space-x-0 lg:flex lg:space-x-4">
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
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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

            {/* card details */}
            <h2 className="my-4 font-bold text-xl text-[#52321b]">
              Card Details
            </h2>

            <div className="space-x-0 lg:flex lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label
                  htmlFor="card-num"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  Card Number
                </label>
                <input
                  id="card-num"
                  type="number"
                  minLength={16}
                  maxLength={16}
                  placeholder="Card Number"
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => {
                    setFormErrors({
                      ...formErrors,
                      cardNum: e.target.value.trim() === "",
                    });
                  }}
                />
                {formErrors.cardNum && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter your Card Number.
                  </p>
                )}
              </div>
              <div className="w-full flex gap-1 md:gap-3 mt-4 md:mt-0 lg:w-1/2 ">
                <div className="w-full">
                  <label
                    htmlFor="year"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Expiry Year
                  </label>
                  <input
                    id="year"
                    type="number"
                    minLength={4}
                    maxLength={4}
                    autoComplete="off"
                    placeholder="Expiry Year"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setFormErrors({
                        ...formErrors,
                        year: e.target.value.trim() === "",
                      });
                    }}
                  />
                  {formErrors.year && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your Expiry Year.
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    htmlFor="cvv"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="number"
                    minLength={3}
                    maxLength={3}
                    autoComplete="off"
                    placeholder="CVV"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    onChange={(e) => {
                      setFormErrors({
                        ...formErrors,
                        cvv: e.target.value.trim() === "",
                      });
                    }}
                  />
                  {formErrors.cvv && (
                    <p className="text-red-500 text-sm mt-1">
                      Please enter your CVV.
                    </p>
                  )}
                </div>
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
              <button
                onClick={handleBtn}
                className=" rounded-md bg-[#3b2312] py-2 px-5 font-medium flex justify-center text-[#f1eeeb] hover:bg-[#643e23] transition-all items-center space-x-3"
              >
                <span className="text-lg">Proceed To Pay</span>
                <MdPayment className="text-xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}