import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { BsFillAwardFill, BsPeopleFill } from "react-icons/bs";

const WhyChooseUs = () => {
  return (
    <div className="w-screen h-full p-[16px] md:py-[100px] md:px-[100px]">
      <div className="container mx-auto">
        <h2 class="text-gray-900 text-[28px] md:text-4xl font-bold font-main mb-4 md:mb-12 text-center">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          <div className="p-6 bg-orange/10 rounded-[12px] h-full md:h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center text-[24px] mb-6 text-orange">
              <BsPeopleFill />
            </div>
            <p className="text-[20px] font-semibold text-black/90 mb-4 font-main">
              User-Friendliness
            </p>
            <p className="font-outfit text-black/80 text-[15px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur excepturi, molestiae assumenda dolores doloremque
              numquam nemo est maiores, ipsam aperiam vel! Enim modi consequatur
              quaerat sed earum numquam provident sit?
            </p>
          </div>
          <div className="p-6 bg-orange/10 rounded-[12px] h-full md:h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center text-[28px] mb-6 text-orange">
              <BsFillAwardFill />
            </div>
            <p className="text-[20px] font-semibold text-black/90 mb-4 font-main">
              Reputation
            </p>
            <p className="font-outfit text-black/80 text-[15px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur excepturi, molestiae assumenda dolores doloremque
              numquam nemo est maiores, ipsam aperiam vel! Enim modi consequatur
              quaerat sed earum numquam provident sit?
            </p>
          </div>
          <div className="p-6 bg-orange/10 rounded-[12px] h-full md:h-[300px]">
            <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center text-[28px] text-orange mb-6">
              <FaShippingFast />
            </div>
            <p className="text-[20px] font-semibold text-black/90 mb-4 font-main">
              Speed
            </p>
            <p className="font-outfit text-black/80 text-[15px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur excepturi, molestiae assumenda dolores doloremque
              numquam nemo est maiores, ipsam aperiam vel! Enim modi consequatur
              quaerat sed earum numquam provident sit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
