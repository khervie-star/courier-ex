import React, { useState } from "react";
import logo from "../Components/Assets/Images/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);

  console.log(location.pathname);
  return (
    <div
      className="overflow-y-hidden bg-gray-100 pb-12"
      // style={{ minHeight: 700 }}
    >
      {/* Code block starts */}

      <nav className="fixed z-50 w-full border-b bg-gray-100">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 md:py-0">
          <div
            aria-label="Home. logo"
            role="img"
            className="flex items-center gap-2">
            <img className="w-[100px] md:w-[120px]" src={logo} alt="logo" />
          </div>
          <div>
            <button
              onClick={() => setShow(!show)}
              className={`${
                show ? "hidden" : ""
              } text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:block md:hidden`}>
              <svg
                aria-haspopup="true"
                aria-label="open Main Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu md:hidden"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={8} x2={20} y2={8} />
                <line x1={4} y1={16} x2={20} y2={16} />
              </svg>
            </button>
            <div
              id="menu"
              className={` ${show ? "" : "hidden"} md:block lg:block `}>
              <button
                onClick={() => setShow(!show)}
                className="fixed top-0 z-30 mt-6 block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden lg:hidden">
                <svg
                  aria-label="close main menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
              <ul className="font-outfit fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center bg-white py-7 text-3xl md:relative md:flex md:flex-row md:bg-transparent md:text-base md:font-medium transition-all duration-1000 gap-8">
                <li
                  className={`cursor-pointer pt-10 text-base text-gray-600 hover:text-gray-900 md:pt-0 lg:text-lg ${
                    location.pathname == "/"
                      ? "border-b-2 border-solid border-orange text-[#150200]"
                      : ""
                  }`}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={`cursor-pointer pt-10 text-base text-gray-600 hover:text-gray-900 md:pt-0 lg:text-lg ${
                    location.pathname == "/about"
                      ? "border-b-2 border-solid border-orange text-[#150200]"
                      : ""
                  }`}>
                  <Link to="/about">About us</Link>
                </li>
                <li
                  className={`cursor-pointer pt-10 text-base text-gray-600 hover:text-gray-900 md:pt-0 lg:text-lg ${
                    location.pathname == "/services"
                      ? "border-b-2 border-solid border-orange text-[#150200]"
                      : ""
                  }`}>
                  <Link to="/services">Services</Link>
                </li>
                <li
                  className={`cursor-pointer pt-10 text-base text-gray-600 hover:text-gray-900 md:pt-0 lg:text-lg ${
                    location.pathname == "/contact"
                      ? "border-b-2 border-solid border-orange text-[#150200]"
                      : ""
                  }`}>
                  <Link to="/contact">Contact us</Link>
                </li>
                <div className="flex flex-col gap-10 md:hidden">
                  <li className="cursor-pointer pt-10 text-base text-orange hover:text-orange/80 md:ml-5 md:pt-0 lg:ml-10 lg:text-lg text-center">
                    <Link to="javascript: void(0)">Sign In</Link>
                  </li>
                  <Link
                    to="/sign-up"
                    className="font-outfit rounded border border-orange bg-orange px-4 py-1 text-sm  font-semibold text-white transition duration-150 ease-in-out hover:border-orange/75 hover:bg-orange/75 focus:outline-none focus:ring-2 focus:ring-orange/75 focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-lg lg:font-semibold">
                    Create account
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/sign-in"
              className="font-outfit hidden rounded border-none border-orange bg-transparent px-4 py-1 text-sm text-orange transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-lg lg:font-semibold">
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="font-outfit hidden rounded border border-orange bg-orange px-4 py-1 text-sm  font-semibold text-white transition duration-150 ease-in-out hover:border-orange/75 hover:bg-orange/75 focus:outline-none focus:ring-2 focus:ring-orange/75 focus:ring-offset-2 sm:px-8 sm:py-3 md:block lg:text-lg lg:font-semibold">
              Create account
            </Link>
          </div>
        </div>
      </nav>
      {/* <div className='bg-gray-100'>
        <div className='container mx-auto flex flex-col items-center py-12 sm:py-24'>
          <div className='mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex'>
            <h1 className='text-center text-2xl font-black leading-7 text-gray-800 sm:text-3xl md:text-4xl md:leading-10 lg:text-5xl xl:text-6xl'>
              The Freedom to Create the
              <span className='text-orange'>Websites</span>
              You Want
            </h1>
            <p className='mt-5 text-center text-sm font-normal text-gray-400 sm:mt-10 sm:text-lg lg:w-10/12'>
              A professonal website drives sales. Create a beautiful website to
              impress and engage new customers and establish your business
              online{' '}
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <button className='rounded border border-orange bg-orange px-4 py-2 text-sm text-white transition duration-150 ease-in-out  hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold'>
              Get Started
            </button>
            <button className='ml-4 rounded border border-orange bg-transparent px-4 py-2 text-sm text-orange transition duration-150 ease-in-out  hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold'>
              Live Demo
            </button>
          </div>
        </div>
      </div> */}

      {/* Code block ends */}
    </div>
  );
};

export default Navbar;
