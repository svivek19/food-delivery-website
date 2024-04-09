import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const Pizza = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "pizza"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setProduct(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-11/12 md:w-5/6 text-[#52321b]">
        <h1>Pizza</h1>
        <p>Cheesilicious pizzas to make every day extraordinary.</p>
      </div>
      <Card product={product} />
    </div>
  );
};

export default Pizza;
