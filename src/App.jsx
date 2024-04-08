import React from "react";
import Offer from "./components/Offer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Discover from "./components/Discover";
import SpecialOffer from "./components/SpecialOffer";

const App = () => {
  return (
    <>
      <Offer />
      <Navbar />
      <Carousel />
      <Discover />
      <SpecialOffer />
    </>
  );
};

export default App;
