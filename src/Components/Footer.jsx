import React from "react";
import {
  FaMapLocationDot,
  FaPhoneVolume,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-orange w-screen pt -[200px]">
      <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          <div className="flex flex-col flex-shrink-0">
            <div className="mb-6 text-[32px] font-bold text-white font-main">
              AutoCarriers
            </div>
            <div className="flex flex-col gap-[12px] text-white font-medium font-outfit text-[18px] text-left justify-start items-start">
              <div className="flex items-center justify-center gap-3 ">
                <div>
                  <FaMapLocationDot />
                </div>
                <p>123, Main Street, Anytown, USA</p>
              </div>
              <div className="flex items-center justify-center gap-3 ">
                <div>
                  <FaPhoneVolume />
                </div>
                <p>+123 456 7890</p>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-between mt-8 md:mt-0">
            <div className="sm:ml-0 ml- text-white font-outfit text-[18px] font-normal">
              <h2 className="text-[21px] font-semibold leading-4 ">
                Quick Links
              </h2>
              <p className="hover:text-gray-500 text-base leading-4 mt-6  cursor-pointer">
                About us
              </p>
              <p className="hover:text-gray-500 text-base leading-4 mt-6  cursor-pointer">
                Services
              </p>
              <p className="hover:text-gray-500 text-base leading-4 mt-6  cursor-pointer">
                Track your shipment
              </p>
              <p className="hover:text-gray-500 text-base leading-4 mt-6  cursor-pointer">
                Get a quote
              </p>
            </div>
            <div className="text-white font-outfit text-[18px] font-normal">
              <h2 className="text-[21px] font-semibold leading-4 ">Support</h2>
              <p className="hover:text-gray-300 text-base leading-4 mt-6  cursor-pointer">
                Contact us
              </p>
              <p className="hover:text-gray-300 text-base leading-4 mt-6  cursor-pointer">
                Careers
              </p>
              <p className="hover:text-gray-300 text-base leading-4 mt-6  cursor-pointer">
                Privacy policy
              </p>
              <p className="hover:text-gray-300 text-base leading-4 mt-6  cursor-pointer">
                Terms of use
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 h-[1px] w-full my-[30px] md:my-[45px]" />
        <div className="flex justify-between items-center">
          <p className="text-white text-[14px] font-outfit">
            &copy; AutoCarrier 2023
          </p>
          <div className="flex gap-3 text-white text-base">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
