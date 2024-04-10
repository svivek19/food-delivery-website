import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import Discover from "../components/Discover";
import SpecialOffer from "../components/SpecialOffer";
import Delivery from "../components/Delivery";
import AppDownload from "../components/AppDownload";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
