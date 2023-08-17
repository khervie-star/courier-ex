import React from "react";
import herobg from "../Components/Assets/Images/hero.jpeg";
import newsletterbg from "../Components/Assets/Images/newsletter.jpeg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Blog from "../Components/Hompage/Blog";
import TrustedBy from "../Components/Hompage/TrustedBy";
import WhyChooseUs from "../Components/Hompage/WhyChooseUs";
import OurTeam from "../Components/Hompage/OurTeam";
import Services from "../Components/Hompage/Services";
import CTA1 from "../Components/Hompage/CTA1";
import Counter from "../Components/Hompage/Counter";
import CTA2 from "../Components/Hompage/CTA2";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <section
        style={{ "--image-url": `url(${herobg})` }}
        className="hero relative h-screen bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat">
        <div className="overlay absolute left-0 top-0 h-full w-full bg-black/80" />
        <div className="container relative mx-auto flex h-full w-full flex-col items-center justify-center py-12 sm:py-24">
          <div className="mb-5 w-11/12 flex-col items-center justify-center sm:mb-10  sm:w-2/3 lg:flex">
            <h1 className="font-outfit text-center text-[32px] font-bold leading-normal text-white md:text-[56px]  xl:text-[72px]">
              Connecting Miles, Delivering Smiles:
              <span className="text-indigo-700 mx-2">Unleash</span>
              the Power of Timely Couriers
            </h1>
            <p className="mt-5 text-center text-sm font-normal font-outfit text-gray-300 sm:mt-10 sm:text-lg lg:w-10/12">
              Elevate your shipping game with our cutting-edge courier services.
              We specialize in delivering more than just packages – we deliver
              peace of mind, efficiency, and a seamless experience from start to
              finish.
            </p>
          </div>
          <div className="flex items-center justify-center font-outfit text-[18px]">
            <button className="rounded border border-indigo-700 bg-indigo-700 px-4 py-2 text-sm text-white transition duration-150 ease-in-out  hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
              Get Quote
            </button>
            <button className="ml-4 rounded border-transparent border-indigo-700 bg-white px-4 py-2 text-sm text-indigo-700 transition duration-150 ease-in-out  hover:border-indigo-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2 sm:px-10 sm:py-4 lg:text-xl lg:font-bold">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <section className="hero-cta font-mnt relative w-screen px-[100]">
        <div className="container z-[9999] mx-auto mt-[-120px] flex h-full items-center justify-between bg-gray-100 px-[100px] py-[75px] shadow-[0px_48px_100px_0px_rgba(17,12,46,0.15)]">
          <div className="">
            <h2 className="mb-[12px] font-bold text-[28px] text-left">
              Track & Trace
            </h2>
            <div className="flex h-[60px] w-[500px]">
              <div className="relative h-full w-[70%] bg-indigo-100">
                <input
                  className="px-3 font-primary h-full w-full border-transparent bg-transparent font-medium focus:border-2 focus:border-solid focus:border-indigo-700 focus:outline-none focus:ring-0"
                  placeholder="Tracking number"
                />
              </div>
              <button
                type="button"
                className="font-outfit text-[20px] flex h-full w-[30%] items-center justify-center border-2 border-solid border-indigo-600 bg-indigo-700 font-semibold  text-white">
                Track
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="mb-[12px] font-bold text-[28px] text-left">
              Find a location
            </h2>
            <div className="flex h-[60px] w-[500px]">
              <div className="relative h-full w-[70%] bg-indigo-100">
                <input
                  className="px-3 font-primary h-full w-full border-transparent bg-transparent font-medium focus:border-2 focus:border-solid focus:border-indigo-700 focus:outline-none focus:ring-0"
                  placeholder="Tracking number"
                />
              </div>
              <button
                type="button"
                className="font-outfit text-[20px] flex h-full w-[30%] items-center justify-center border-2 border-solid border-indigo-600 bg-indigo-700 font-semibold  text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <CTA1 />
      <Counter />
      <CTA2 />
      <WhyChooseUs />
      <OurTeam />
      <TrustedBy />
      <Blog />
      <section className="newsletter h-full w-screen z-50 relative">
        <div
          className="container mx-auto p-[100px] bg-[image:var(--image-url)] bg-cover bg-center bg-no-repeat flex flex-row-reverse mb-[-175px] "
          style={{ "--image-url": `url(${newsletterbg})` }}>
          <div>
            <h2 className="text-white font-main text-[24px] md:text-[48px] font-bold mt-5">
              Subscribe to our Newsletter!
            </h2>
            <div className="flex h-[60px] md:w-[600px]">
              <div className="relative h-full w-[70%] bg-indigo-100">
                <input
                  className="px-3 font-mnt h-full w-full border-transparent bg-transparent font-medium focus:border-2 focus:border-solid focus:border-indigo-700 focus:outline-none focus:ring-0"
                  placeholder="Tracking number"
                />
              </div>
              <button
                type="button"
                className="font-outfit text-[20px] flex h-full w-[30%] items-center justify-center border-2 border-solid border-indigo-600 bg-indigo-700 font-semibold  text-white">
                Track
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
