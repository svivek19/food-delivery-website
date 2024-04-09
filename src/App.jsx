import React, { useEffect } from "react";
import Offer from "./components/Offer";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Discover from "./components/Discover";
import SpecialOffer from "./components/SpecialOffer";
import AppDownload from "./components/AppDownload";
import Footer from "./components/Footer";
import Delivery from "./components/Delivery";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  }, []);

  return (
    <>
      <Offer />
      <Navbar />
      <Carousel />
      <Discover />
      <SpecialOffer />
      <Delivery />
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;
