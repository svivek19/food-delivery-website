import React, { useState } from "react";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const items = [img1, img2, img3];

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-72 my-9 overflow-hidden rounded-lg md:h-[35rem]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={item}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrevSlide}
      >
        <GrCaretPrevious className="text-white text-4xl bg-slate-800 rounded-full p-2" />
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNextSlide}
      >
        <GrCaretNext className="text-white text-4xl bg-slate-800 rounded-full p-2" />
      </button>
    </div>
  );
};

export default Carousel;
