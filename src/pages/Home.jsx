import React from "react";
import Carousel from "../components/Carousel";
import Discover from "../components/Discover";
import SpecialOffer from "../components/SpecialOffer";
import Delivery from "../components/Delivery";
import AppDownload from "../components/AppDownload";

const Home = () => {
  return (
    <>
      <Carousel />
      <Discover />
      <SpecialOffer />
      <Delivery />
      <AppDownload />
    </>
  );
};

export default Home;
