import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Puff } from "react-loader-spinner";
import Card from "../components/Card";

const ViewAll = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const burgerQuerySnapshot = await getDocs(collection(db, "burger"));
        const pizzaQuerySnapshot = await getDocs(collection(db, "pizza"));
        const noodlesQuerySnapshot = await getDocs(collection(db, "noodles"));

        const burgerData = burgerQuerySnapshot.docs.map((doc) => doc.data());
        const pizzaData = pizzaQuerySnapshot.docs.map((doc) => doc.data());
        const noodlesData = noodlesQuerySnapshot.docs.map((doc) => doc.data());

        const allFoods = [...burgerData, ...pizzaData, ...noodlesData];

        setProduct(allFoods);
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
        <h1 className="text-4xl font-semibold mb-2">Available Food's</h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mb-96">
          <Puff color="#52321b" height={50} width={50} />
        </div>
      ) : (
        <Card product={product} />
      )}
    </div>
  );
};

export default ViewAll;
