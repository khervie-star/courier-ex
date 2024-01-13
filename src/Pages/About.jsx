import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { FaPeopleLine } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const About = () => {
  const myName = "About";
  const handleButtonClick = () => {
    console.log("No");
  };
  return (
    <>
      <Navbar />
      <div>
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 pt-16 py-9 px-4">
          <p class="font-bold text-[18px] leading-3 text-orange drk:text-orange hover:text-orange/80 cursor-pointer pb-2 font-outfit mb-6">
            <button onClick={handleButtonClick}>Click</button>
          </p>
          <div class="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
            <div class="w-full lg:w-6/12">
              <h2 class="w-full font-main font-bold lg:text-4xl text-3xl lg:leading-10 drk:text-white leading-9">
                We are here to make great design accessible and delightfull for
                everyone
              </h2>
              <p class="font-normal text-base leading-6 text-gray-600 drk:text-gray-200 mt-6 font-mnt">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                facilis nostrum distinctio aspernatur asperiores! Autem dicta
                rerum blanditiis nulla odio suscipit, ipsum aspernatur quibusdam
                dolores illum, nemo, ea sit reprehenderit! Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Facere facilis nostrum
                distinctio aspernatur asperiores! Autem dicta rerum blanditiis
                nulla odio suscipit,
              </p>
            </div>
            <div class="w-full lg:w-6/12">
              <img
                class="lg:block hidden w-full"
                src="https://i.ibb.co/RjNH7QB/Rectangle-122-1.png"
                alt="people discussing on board"
              />
              <img
                class="lg:hidden sm:block hidden w-full"
                src="https://i.ibb.co/16fPqrg/Rectangle-122-2.png"
                alt="people discussing on board"
              />
              <img
                class="sm:hidden block w-full"
                src="https://i.ibb.co/Jxhpxh6/Rectangle-122.png"
                alt="people discussing on board"
              />
            </div>
          </div>

          <div class="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
            <div class="w-full lg:w-6/12">
              <h2 class="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 drk:text-white font-main">
                Our Mission
              </h2>
              <p class="font-normal text-base leading-6 text-gray-600 drk:text-gray-200 mt-6 w-full lg:w-10/12 xl:w-9/12 font-outfit">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                facilis nostrum distinctio aspernatur asperiores! Autem dicta
                rerum blanditiis nulla odio suscipit, ipsum aspernatur quibusdam
                dolores illum, nemo, ea sit reprehenderit! Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Facere facilis nostrum
                distinctio aspernatur asperiores! Autem dicta rerum blanditiis
                nulla odio suscipit,
              </p>
              <p class="font-normal text-base leading-6 text-gray-600 drk:text-gray-200 w-full lg:w-10/12 xl:w-9/12 mt-10 font-outfit">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                facilis nostrum distinctio aspernatur asperiores! Autem dicta
                rerum blanditiis nulla odio suscipit, ipsum aspernatur quibusdam
                dolores illum, nemo, ea sit reprehenderit!
              </p>
            </div>
            <div class="w-full lg:w-6/12">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                <div class="flex p-4 shadow-md">
                  <div class="mr-6 text-orange text-[21px]">
                    <RiTeamFill />
                  </div>
                  <div class="">
                    <p class="font-semibold font-mnt lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 drk:text-white">
                      Team
                    </p>
                    <p class="mt-2 font-normal text-base leading-6 text-gray-600 drk:text-gray-200 font-outfit">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae impedit, porro nostrum ullam quos aliquid quas
                      voluptates animi
                    </p>
                  </div>
                </div>

                <div class="flex p-4 shadow-md">
                  <div class="mr-6 text-orange text-[21px]">
                    <FaPeopleLine />
                  </div>
                  <div class="">
                    <p class="font-semibold font-mnt lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 drk:text-white">
                      Board
                    </p>
                    <p class="mt-2 font-normal text-base leading-6 text-gray-600 drk:text-gray-200 font-outfit">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae impedit, porro nostrum ullam quos aliquid quas
                      voluptates animi
                    </p>
                  </div>
                </div>

                <div class="flex p-4 shadow-md">
                  <div class="mr-6 text-orange text-[21px]">
                    <BsEnvelope />
                  </div>
                  <div class="">
                    <p class="font-semibold font-mnt lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 drk:text-white">
                      Press
                    </p>
                    <p class="mt-2 font-normal text-base leading-6 text-gray-600 drk:text-gray-200 font-outfit">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae impedit, porro nostrum ullam quos aliquid quas
                      voluptates animi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
