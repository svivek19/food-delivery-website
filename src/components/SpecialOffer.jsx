import React from "react";
import combo1 from "../assets/specialOffers/combo1.jpeg";
import combo2 from "../assets/specialOffers/combo2.jpg";
import combo3 from "../assets/specialOffers/combo3.jpeg";
import combo4 from "../assets/specialOffers/combo4.jpeg";

const SpecialOffer = () => {
  const images = [combo1, combo2, combo3, combo4];

  return (
    <div className="w-full bg-[#52321b] px-0 py-4 md:p-5">
      <div className="my-8 md:my-14 w-[95%] md:w-5/6 mx-auto text-center text-3xl font-medium">
        <div className="text-[#e4c9b5]">
          <h1>Special Offers</h1>
        </div>

        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide text-[#52321b]">
          <div className="flex justify-start md:justify-around gap-10 my-10 md:my-20">
            <div className="w-full md:w-11/12 bg-white rounded-lg">
              <div>
                <img
                  className="rounded-t-lg max-w-48 md:max-w-full h-64"
                  alt="mushroom pizza with burger"
                  src={combo1}
                />
              </div>
              <div className="p-1 md:p-5">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-center"
                >
                  Mushroom Pizza with Burger Combo
                </a>
              </div>
              <div className="p-1 text-base font-normal text-center">
                <p>
                  Rs. 180 <span className="line-through mx-3">Rs. 250</span>
                </p>
              </div>
              <div className="py-4">
                <button className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] px-6 py-2">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="w-full md:w-11/12 bg-white rounded-lg">
              <div>
                <img
                  className="rounded-t-lg  max-w-48 md:max-w-full h-64 "
                  alt="pizza burger with lemon juice combo"
                  src={combo2}
                />
              </div>
              <div className="p-1 md:p-5">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-center"
                >
                  Pizza, Burger with Lemon Juice Combo
                </a>
              </div>
              <div className="p-1 text-base font-normal text-center">
                <p>
                  Rs. 250 <span className="line-through mx-3">Rs. 380</span>
                </p>
              </div>

              <div className="py-4">
                <button className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] px-6 py-2">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="w-full md:w-11/12 bg-white rounded-xl">
              <div>
                <img
                  className="rounded-t-lg max-w-48 md:max-w-full h-64"
                  alt="chicken burger with pizza"
                  src={combo3}
                />
              </div>
              <div className="p-1 md:p-5">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-center"
                >
                  Chicken Burger with Pizza Combo
                </a>
              </div>
              <div className="p-1 text-base font-normal text-center">
                <p>
                  Rs. 220 <span className="line-through mx-3">Rs. 300</span>
                </p>
              </div>
              <div className="py-4">
                <button className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] px-6 py-2">
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="w-full md:w-11/12 bg-white rounded-xl">
              <div>
                <img
                  className="rounded-t-lg max-w-48 md:max-w-full h-64"
                  alt="Grilled Stuffed Pizza Burgers"
                  src={combo4}
                />
              </div>
              <div className="p-1 md:p-5">
                <a
                  href="#"
                  className="inline-flex items-center text-base font-medium text-center"
                >
                  Grilled Stuffed Pizza Burgers
                </a>
              </div>
              <div className="p-1 text-base font-normal text-center">
                <p>
                  Rs. 300 <span className="line-through mx-3">Rs. 420</span>
                </p>
              </div>
              <div className="py-4">
                <button className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] px-6 py-2">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
