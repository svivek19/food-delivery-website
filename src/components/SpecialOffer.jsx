import React from "react";
import combo1 from "../assets/specialOffers/combo1.jpeg";
import combo2 from "../assets/specialOffers/combo2.jpg";
import combo3 from "../assets/specialOffers/combo3.jpeg";
import combo4 from "../assets/specialOffers/combo4.jpeg";

const SpecialOffer = () => {
  const offers = [
    {
      image: combo1,
      name: "Mushroom Pizza with Burger Combo",
      price: "Rs. 180",
      originalPrice: "Rs. 250",
    },
    {
      image: combo2,
      name: "Pizza, Burger with Lemon Juice Combo",
      price: "Rs. 250",
      originalPrice: "Rs. 380",
    },
    {
      image: combo3,
      name: "Chicken Burger with Pizza Combo",
      price: "Rs. 220",
      originalPrice: "Rs. 300",
    },
    {
      image: combo4,
      name: "Grilled Stuffed Pizza Burgers",
      price: "Rs. 300",
      originalPrice: "Rs. 420",
    },
  ];

  return (
    <div className="w-full bg-[#52321b] px-0 py-4 md:p-5">
      <div className=" w-[95%] md:w-5/6 mx-auto text-3xl text-center font-medium">
        <div className="text-[#e4c9b5] py-2 text-start">
          <h1>Special Offers</h1>
        </div>

        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide text-[#52321b]">
          <div className="flex justify-start md:justify-around gap-10 my-10">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="w-full md:w-11/12 bg-white rounded-lg"
              >
                <div>
                  <img
                    className="rounded-t-lg max-w-48 md:max-w-full h-64"
                    alt={offer.name}
                    src={offer.image}
                  />
                </div>
                <div className="p-1 md:p-5">
                  <a
                    href="#"
                    className="inline-flex items-center text-base font-medium text-center"
                  >
                    {offer.name}
                  </a>
                </div>
                <div className="p-1 text-base font-normal text-center">
                  <p>
                    {offer.price}{" "}
                    <span className="line-through mx-3">
                      {offer.originalPrice}
                    </span>
                  </p>
                </div>
                <div className="py-4">
                  <button className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] hover:scale-105 transition-all px-6 py-2">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <button className="p-1 rounded-full border border-[#f0edeb] bg-[#ebe3de] text-base font-normal text-center hover:scale-105 transition-all px-6 py-2">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
