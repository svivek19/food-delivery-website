import React, { useEffect, useState } from "react";
import { Puff } from "react-loader-spinner";
import CartItems from "../components/CartItems";

const Cart = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-24">
      {loading ? (
        <div className="flex justify-center mb-96">
          <Puff width={50} height={50} color="#52321b" />
        </div>
      ) : (
        <CartItems />
      )}
    </div>
  );
};

export default Cart;
