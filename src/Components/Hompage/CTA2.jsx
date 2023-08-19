import React from "react";
import image from "../Assets/Images/WhatsApp Image 2023-08-18 at 19.46.54 (1).jpeg";

const CTA2 = () => {
  return (
    <div className="container mx-auto px-4 md:px-[100px] mt-[24px] md:mt-[100px]">
      <div className="pb-16 pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center justify-between">
            <div className="md:w-1/2 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <h1 className="text-[32px] lg:text-5xl tracking-tighter md:leading-snug f-f-l font-bold font-main">
                  How We Help Businesses Accross The World
                </h1>
                <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8 font-mnt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  laborum id beatae magni! Illo impedit, veritatis perferendis
                  in saepe eveniet ab consectetur, illum tempora explicabo fugit
                  iure fuga rerum laborum.
                </h2>
                <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                  <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline decoration-yellow-400 font-outfit text-orange">
                    Learn more
                  </h3>
                  <div className="pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none">
                      <path
                        d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                        fill="#facc15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 w-full relative h-96 flex items-end justify-center">
              <img
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md "
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA2;
