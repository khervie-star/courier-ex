import React from "react";
import {
  FaTruckMoving,
  FaShip,
  FaPlaneDeparture,
  FaTrain,
  FaWarehouse,
  FaBox,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Road Freight",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaTruckMoving,
  },
  {
    id: 2,
    name: "Ocean Freight",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaShip,
  },
  {
    id: 3,
    name: "Air Freight",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaPlaneDeparture,
  },
  {
    id: 4,
    name: "Train Freight",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaTrain,
  },
  {
    id: 5,
    name: "Warehousing",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaWarehouse,
  },
  {
    id: 6,
    name: "Order Fulfilment",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihilatque reprehenderit, culpa ed.",
    Icon: FaBox,
  },
];

const Services = () => {
  return (
    <div className="w-full p-[100px] mt-[75px]">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-[40px]">
          <div className="w-1/3">
            <h2 className="text-gray-900 text-4xl font-main font-bold">
              Safe & Reliable Cargo Services
            </h2>
          </div>
          <div className="w-1/3">
            <p className="text-gray-500 text-[18px] font-light font-mnt">
              Safe and Reliable cargo solutions is an essential aspect of any
              logistic operation, even when shipping valuable goods
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {services.map((service, i) => (
              <div
                className="w-full h-[200px] bg-white rounded-[8px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] p-6"
                key={i}>
                <div className="text-indigo-700 mb-[20px] text-[32px]">
                  <service.Icon />
                </div>
                <h2 className="text-[28px] font-main font-semibold text-gray-900 mb-3">
                  {service.name}
                </h2>
                <p className="font-mnt">{service.description} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
