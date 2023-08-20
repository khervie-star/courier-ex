import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FcInspection, FcInTransit, FcDebt } from "react-icons/fc";

const Services = () => {
  return (
    <>
      <Navbar />
      <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] px-[24px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                <div className="w-full flex justify-center">
                  <span className="font-semibold text-lg text-primary mb-2 block px-4 py-2 bg-orange/20 rounded-full w-fit text-center font-main">
                    Our Services
                  </span>
                </div>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  font-outfit
                  ">
                  What We Offer
                </h2>
                <p className="text-base text-body-color font-outfit">
                  Car shipping from USA to Nigeria Cotonue no one does it better
                  than we do!!
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
                              h-[300px]

               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8                 
                   text-center text-[35px]
                  ">
                  <FcDebt />
                </div>
                <h4 className="font-semibold text-[21px] md:text-[28px] text-dark mb-3 font-main">
                  Auctions payment in 🇺🇸 USA
                </h4>
                <p className="text-body-color font-mnt text-[13px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti tenetur nisi sit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               h-[300px]
               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  text-center text-[35px]
                  ">
                  <FcInspection />
                </div>
                <h4 className="font-semibold text-[21px] md:text-[28px] text-dark mb-3 font-main">
                  Inspection
                </h4>
                <p className="text-body-color font-mnt text-[14px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti tenetur nisi sit.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
                           h-[300px]

               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                   text-center text-[35px]
                  ">
                  <FcInTransit />
                </div>
                <h4 className="font-semibold text-[21px] md:text-[28px] text-dark mb-3 font-main">
                  Local transport from any location in the USA to the nearest
                  terminals.
                </h4>
                <p className="text-body-color"></p>
              </div>
            </div>
            {/* <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "></div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Speed Optimized
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "></div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Fully Customizable
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               ">
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "></div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Regular Updates
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;
