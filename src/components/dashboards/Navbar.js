import React from "react";
import { Searchbar } from "../../assets/Svgs";
import CustomDdown from "./CustomDdown";

const Navbar = ({setCollapsed,isCollapsed}) => {

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="bg-[#191A1E] px-6 h-[110px] flex justify-center items-center">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex justify-center items-center w-72 h-[55px] rounded-[10px] bordered bg-[#1D1D1D]">
          <span className=" h-full px-[14px] flex items-center">
            <Searchbar />
          </span>
          <input
            className="w-full h-full border-white bg-transparent placeholder-[#ffffff36]  text-[#ffffff81] text-sm"
            placeholder="Search here..."
          />
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleCollapse}
            className="text-white focus:outline-none focus:border-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="lg:flex justify-center items-center gap-4 hidden">
        <CustomDdown/>    
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
          >
            About
          </a>
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden  flex ${
          isCollapsed ? "hidden" : "flex"
        } flex-col lg:flex-row items-center`}
      >
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
        >
          Home
        </a>
        <a
          href="/profile"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
        >
          About
        </a>
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
