import React, { useEffect } from "react";
import Offer from "./components/Offer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Burger from "./pages/Burger";
import Noodles from "./pages/Noodles";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  }, []);

  return (
    <>
      <Router>
        <Offer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/noodles" element={<Noodles />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
