import React, { useState, useEffect } from "react";
import { GrCaretPrevious } from "react-icons/gr";
import { GrCaretNext } from "react-icons/gr";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const carouselCollection = collection(db, "carousel");
        const snapshot = await getDocs(carouselCollection);
        const images = snapshot.docs.map((doc) => doc.data());
        console.log(images);
        setCarouselImages(images);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
      }
    };

    fetchCarouselImages();
  }, []);

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      <div className="relative h-72 my-9 overflow-hidden rounded-lg md:h-[35rem]">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${
              index === activeIndex ? "" : "hidden"
            }`}
            data-carousel-item={index === activeIndex ? "active" : ""}
          >
            <img
              src={image.url} // Assuming you have a 'url' field for the image URL in Firebase
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
