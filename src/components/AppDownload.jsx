import React from "react";
import play from "../assets/apps/playstore.avif";
import app from "../assets/apps/appstore.avif";

const AppDownload = () => {
  return (
    <div>
      <div className="mt-10 bg-[#dfdddc] p-3 md:p-8">
        <div className="w-5/6 mx-auto md:flex justify-between space-y-4 md:space-y-0">
          <div className="text-xl md:text-3xl font-sans font-bold text-[#52321b]">
            <h1>
              For better experience, <br /> Download the Vbite app now
            </h1>
          </div>
          <div className="flex space-x-5">
            <img src={play} alt="playstore" className="w-32 md:w-52" />
            <img src={app} alt="app store" className="w-32 md:w-52" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
