import React from "react";
import logo from "../assets/brandLogo.png";

function Footer() {
  return (
    <footer className="bg-[#412614] text-[#dad2cc] fixed w-full bottom-0">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-12" alt="brand Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Vbite
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a
                href="https://github.com/svivek19"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/svivek018/"
                target="_blank"
                className="hover:underline me-4 md:me-6"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://vivekananthan.vercel.app/"
                target="_blank"
                className="hover:underline"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-[rgb(109,75,52)] sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="#" className="hover:underline">
            Vbite™
          </a>
          <span> . All Rights Reserved.</span>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
