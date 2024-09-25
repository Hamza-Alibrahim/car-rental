"use client";

import Image from "next/image";
import { useState } from "react";
import carImages from "../data/carImages";
import Link from "next/link";
import carsDetails from "../data/carsDetails";

const Pick = () => {
  const [car, setCar] = useState("Audi A1 S-Line");
  const [loading, setLoading] = useState(true);
  const choosenCar = carsDetails.find((c) => c.id === car);
  const cars = [
    "Audi A1 S-Line",
    "VW Golf 6",
    "Toyota Camry",
    "BMW 320 ModernLine",
    "Mercedes-Benz GLK",
    "VW Passat CC",
  ];
  return (
    <section className="py-[10rem]">
      <div className="css-container">
        <div className="text-center text-[#010103] mx-auto max-w-[50rem] mb-[5rem]">
          <p className="text-[2.4rem] font-medium ">Vehicle Models</p>
          <h1 className="text-[4.2rem] font-bold  mt-[.5rem] mb-[1rem]">
            Our rental fleet
          </h1>
          <p className="text-[1.6rem] font-normal  text-[#706f7b]">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="flex gap-[1rem] justify-between max-lg:flex-col max-lg:gap-[5rem]">
          <ul className="flex flex-col gap-[.7rem]">
            {cars.map((c) => {
              return (
                <li
                  className={`${
                    c === car ? "bg-[#ff4d30] text-white" : "bg-[#e9e9e9]"
                  } text-[2rem] font-semibold cursor-pointer py-[1.5rem] px-[2.5rem] transition-colors duration-200 hover:bg-[#ff4d30] hover:text-white`}
                  key={c}
                  onClick={() => {
                    setCar(c);
                    setLoading(true);
                  }}
                >
                  {c}
                </li>
              );
            })}
          </ul>
          <div className="flex justify-between gap-[11rem] max-xl:gap-[2rem] max-sm:flex-col max-sm:gap-[5rem] max-sm:items-center">
            <div className="w-[50rem] max-sm:w-full relative">
              {loading && (
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[5rem] h-[5rem] rounded-full border-[5px] border-[#bdbdbd] border-t-[#ff4d30] animate-spin" />
              )}
              <Image
                className="w-full mt-[6rem]"
                src={carImages[car]}
                alt="Car Image"
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
            <div className="w-[25rem]">
              <div className="flex items-center gap-[1.5rem] py-[.3rem] px-[1.9rem] bg-[#ff4d30] text-white whitespace-nowrap text-[1.8rem] font-normal">
                <span className="text-[2.8rem] font-bold">$45</span>/ rent per
                day
              </div>
              <div className="text-[1.4rem] font-normal">
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">Model</span>
                  <span>{choosenCar?.Model}</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">Mark</span>
                  <span>{choosenCar?.Mark}</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">Year</span>
                  <span>{choosenCar?.Year}</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">Doors</span>
                  <span>{choosenCar?.Doors}</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">AC</span>
                  <span>Yes</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">
                    Transmission
                  </span>
                  <span>{choosenCar?.Transmission}</span>
                </div>
                <div className="border-2 border-[#706f7b] border-t-0 grid grid-cols-2 text-center py-[.9rem] px-[.5rem]">
                  <span className="border-r-2 border-r-[#706f7b]">Fuel</span>
                  <span>{choosenCar?.Fuel}</span>
                </div>
              </div>
              <Link
                className="bg-[#ff4d30] !font-poppins text-white text-[2rem] font-semibold flex justify-center mt-[1.4rem] p-[1rem] uppercase transition-colors duration-300 hover:bg-[#e9381d]"
                href="#booking-section"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pick;
