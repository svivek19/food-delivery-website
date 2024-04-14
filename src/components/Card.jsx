import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../reducers/cartReducer";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const handleAdd = (data) => {
    dispatch(addItem(data));
    toast.success(data.name + " " + "added");
  };

  return (
    <div>
      <Toaster />
      {product.map((data, index) => (
        <div className="w-11/12 md:w-5/6 mx-auto" key={index}>
          <div className="grid md:grid-cols-2 py-2 md:py-5">
            <div
              className="w-full md:w-1/2 md:flex justify-center"
              data-aos="fade-up"
            >
              <div className="w-full">
                <img
                  src={data.image}
                  alt={data.name}
                  className="object-cover w-full h-48 rounded-md"
                />
              </div>
            </div>

            <div className="p-2 text-start" data-aos="fade-up">
              <h1 className="text-2xl font-bold text-[#52321b] ">
                {data.name}
              </h1>
              <p className="mt-2 text-lg text-justify text-[#6e6a67]">
                {data.description.length > 100
                  ? data.description.slice(0, 100) + "..."
                  : data.description}
              </p>

              <div className="flex justify-between mt-3 item-center">
                <h1 className="text-xl font-bold text-[#704b30] md:text-xl">
                  Rs. {data.price}
                </h1>
                <button
                  className="px-6 py-3 text-xs font-bold text-white uppercase bg-[#52321b] hover:scale-[102%] transition-all rounded-md"
                  onClick={() => handleAdd(data)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <hr className="border-[#dfcdbf]" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
