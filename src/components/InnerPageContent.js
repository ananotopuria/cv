import React, { useState } from "react";
import MainContent from "./MainContent";
import PhotoBox from "./PhotoBox";
import avatar from "../assets/images/avatar.webp";
import Nav from "./Nav";
import ScrollToTopButton from "./ScrollToTopButton";

const InnerPageContent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`h-full bg-[#222935] text-[#667081] sm:w-[10rem]  md:w-[15rem] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="mt-10 flex w-16 flex-col items-center  justify-center sm:ml-8 md:ml-10">
          <PhotoBox imgSrc={avatar} fullName="Anano Topuria" />
        </div>
        <Nav />
        <button
          onClick={toggleMenu}
          className="absolute right-[-2rem] top-4 p-4"
        >
          {isOpen ? (
            <span className="rounded bg-[#222935] p-1 text-white ">✖</span>
          ) : (
            <span className="rounded bg-[#222935] p-1 text-white">☰</span>
          )}
        </button>
      </div>
      <MainContent isOpen={!isOpen} />
      <ScrollToTopButton />
    </div>
  );
};

export default InnerPageContent;
