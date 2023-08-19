import React from "react";
import image from "../Assets/Images/section1.jpeg";
function CTA1() {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pt-10 md:pt-40">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-between items-center pb-12">
              <div className="md:w-1/2 w-full xl:pr-20 md:pr-6">
                <div className="py-2 text-color">
                  <h1 className="text-[32px] lg:text-5xl font-main md:leading-snug tracking-tighter f-f-l font-black">
                    Digital & Trusted Transport Company
                  </h1>
                  <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8 font-mnt">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Earum dicta modi quisquam, culpa quam aut tenetur
                    voluptates, quos temporibus eius omnis provident quasi fuga
                    dolorum, facere incidunt aliquam itaque ab?
                  </h2>
                  <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                    <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline decoration-yellow-400 font-outfit text-orange">
                      Learn more
                    </h3>
                    <div className="pl-1">
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
                  className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA1;
