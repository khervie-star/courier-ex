import React from "react";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <div className="w-screen h-full p-[100px] bg-orange mt-[100px]">
      <div className="container mx-auto">
        <div className="w-full flex items-start justify-between">
          <div className="text-center">
            <h2 className="text-[48px] font-bold font-main text-white mb-[12px]">
              <CountUp
                end={2500}
                duration={1}
                separator=" "
                decimal=","
                suffix=" +"
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="font-outfit text-gray-200 text-[20px] font-normal">
              Delivered Packages
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[48px] font-bold font-main text-white mb-[12px]">
              <CountUp
                end={95}
                duration={1.25}
                separator=" "
                decimal=","
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="font-outfit text-gray-200 text-[20px] font-normal">
              Countries covered
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[48px] font-bold font-main text-white mb-[12px]">
              <CountUp
                end={700}
                duration={1.25}
                separator=" "
                decimal=","
                suffix=" +"
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="font-outfit text-gray-200 text-[20px] font-normal">
              Satified customers
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[48px] font-bold font-main text-white mb-[12px]">
              <CountUp
                end={500}
                duration={1.75}
                separator=" "
                decimal=","
                suffix=" +"
                enableScrollSpy
                scrollSpyOnce
              />
            </h2>
            <p className="font-outfit text-gray-200 text-[20px] font-normal">
              Tonnes of goods
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
