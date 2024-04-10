import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Puff } from "react-loader-spinner";

const Noodles = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "noodles"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setProduct(data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching data: ", err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-28">
      <div
        className="w-11/12 md:w-5/6 mx-auto text-[#52321b]"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-semibold mb-2">Noodles</h1>
        <p className="text-xl text-[#6e6a67]">
          Cheesilicious Noodles to make every day extraordinary.
        </p>
      </div>
      {loading ? (
        <div className="flex justify-center mb-96">
          <Puff color="#52321b" height={50} width={50} />
        </div>
      ) : (
        <Card product={product} />
      )}
    </div>
  );
};

export default Noodles;
