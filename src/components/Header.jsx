import React from "react";
import NavBar from "./NavBar";
import SearchForm from "./SearchForm";
import Image from "../components/images/Reading-A-Book-3--Streamline-Brooklyn.png";
const Header = () => {
  return (
    <header>
      <NavBar />
      <div className="container mx-auto px-4">
          <div>
        <div className="text-center md:text-left">
          <h1 className="text-[var(--main-fo-cl)] font-bold text-2xl md:text-l lg:text-2xl">
            Fall Into Pages Of{" "}
            <span className="text-[var(--sec-bg-cl)]">Knowledge</span> And{" "}
            <span className="text-[var(--sec-bg-cl)]">Adventures</span>
          </h1>
        </div>

        <div className="w-full mt-4 flex justify-center md:justify-center">
          <SearchForm />
        </div>
          </div>
        <div className="mt-10 p-5 hidden md:flex justify-end">
          <img
            src={Image}
            alt="a book"
            className="  lg:w-11/12  "
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
