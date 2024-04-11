import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addItem } from "../reducers/cartReducer";

const SpecialOffer = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "combo offer"));
        const data = querySnapshot.docs.map((doc) => ({
          id: uuidv4(),
          ...doc.data(),
        }));
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleAdd = (data) => {
    dispatch(addItem(data));
  };

  return (
    <div className="w-full bg-[#52321b] px-0 py-4 md:p-5">
      <div className=" w-[95%] md:w-5/6 mx-auto text-3xl text-center font-medium">
        <div className="text-[#e4c9b5] py-2 text-start" data-aos="fade-up">
          <h1>Special Offers</h1>
        </div>

        <div className="overflow-x-auto md:overflow-x-hidden scrollbar-hide text-[#52321b]">
          <div className="flex justify-start md:justify-around gap-10 my-10">
            {product.map((data, index) => (
              <div
                key={index}
                className="w-full md:w-11/12 bg-white rounded-lg"
                data-aos="fade-up"
              >
                <div>
                  <img
                    className="rounded-t-lg max-w-48 md:max-w-full h-64"
                    alt={data.name}
                    src={data.image}
                  />
                </div>
                <div className="p-1 md:p-5">
                  <p className="inline-flex items-center text-base font-medium text-center">
                    {data.name}
                  </p>
                </div>
                <div className="p-1 text-base font-normal text-center">
                  <p>
                    Rs. {data.price}{" "}
                    <span className="line-through mx-3">
                      Rs. {data.originalPrice}
                    </span>
                  </p>
                </div>
                <div className="py-4">
                  <button
                    className="p-1 rounded-full text-base font-normal text-center border border-[#52321b] hover:scale-105 transition-all px-6 py-2"
                    onClick={() => handleAdd(data)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div data-aos="fade-up">
          <Link
            to={"/allfoods"}
            className="p-1 rounded-full border border-[#f0edeb] bg-[#ebe3de] text-base font-normal text-center hover:scale-105 transition-all px-6 py-2"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
