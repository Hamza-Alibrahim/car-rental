"use client";
import Image from "next/image";
import car from "../imgs/car.png";
import { useState } from "react";

const FAQ = () => {
  const [active, setActive] = useState("");
  function handleClick(ques: string) {
    if (ques === active) setActive("");
    else setActive(ques);
  }
  return (
    <section className="py-[10rem] relative text-[#010103]">
      <Image
        className="absolute left-0 bottom-0 -z-10"
        src={car}
        alt="Background Image"
      />
      <div className="css-container">
        <div className="mx-auto max-w-[80rem] text-center">
          <h4 className="text-[2.2rem] font-bold">FAQ</h4>
          <h2 className="text-[4.2rem] font-bold mb-[1.7rem]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#706f7b] text-[1.6rem] font-normal">
            Frequently Asked Questions About the Car Rental Booking Process on
            Our Website: Answers to Common Concerns and Inquiries.
          </p>
        </div>
        <div className="flex flex-col items-center mt-[7rem]">
          <div className="w-[80rem] max-[860px]:w-full bg-white shadow-lg cursor-pointer">
            <div
              onClick={() => handleClick("q1")}
              className={`flex gap-[1rem] items-center justify-between shadow-md py-[1.8rem] px-[4.5rem] transition-[color,background-color,box-shadow] duration-0 ${
                active === "q1" && "bg-[#ff4d30] text-white shadow-link"
              }`}
            >
              <p className="text-[1.8rem] font-medium font-poppins">
                1. What is special about comparing rental car deals?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-chevron-down flex-shrink-0"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
            <div
              onClick={() => handleClick("q1")}
              className={`text-[#706f7b] font-rubik text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden px-[4.5rem] transition-all duration-[.4s] ${
                active === "q1" && "max-h-[100rem] py-[2.8rem]"
              }`}
            >
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
          </div>
          <div className="w-[80rem] max-[850px]:w-full bg-white shadow-lg cursor-pointer">
            <div
              onClick={() => handleClick("q2")}
              className={`flex gap-[1rem] items-center justify-between shadow-md py-[1.8rem] px-[4.5rem] transition-[color,background-color,box-shadow] duration-0 ${
                active === "q2" && "bg-[#ff4d30] text-white shadow-link"
              }`}
            >
              <p className="text-[1.8rem] font-medium font-poppins">
                2. How do I find the car rental deals?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-chevron-down flex-shrink-0"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>{" "}
            </div>
            <div
              onClick={() => handleClick("q2")}
              className={`text-[#706f7b] font-rubik text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden px-[4.5rem] transition-all duration-[.4s] ${
                active === "q2" && "max-h-[100rem] py-[2.8rem]"
              }`}
            >
              You can find car rental deals by researching online and comparing
              prices from different rental companies. Websites such as Expedia,
              Kayak, and Travelocity allow you to compare prices and view
              available rental options. It is also recommended to sign up for
              email newsletters and follow rental car companies on social media
              to be informed of any special deals or promotions.
            </div>
          </div>
          <div className="w-[80rem] max-[850px]:w-full bg-white shadow-lg cursor-pointer">
            <div
              onClick={() => handleClick("q3")}
              className={`flex gap-[1rem] items-center justify-between shadow-md py-[1.8rem] px-[4.5rem] transition-[color,background-color,box-shadow] duration-0 ${
                active === "q3" && "bg-[#ff4d30] text-white shadow-link"
              }`}
            >
              <p className="text-[1.8rem] font-medium font-poppins">
                3. How do I find such low rental car prices?
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-chevron-down flex-shrink-0"
              >
                <path d="M6 9l6 6l6 -6"></path>
              </svg>
            </div>
            <div
              onClick={() => handleClick("q3")}
              className={`text-[#706f7b] font-rubik text-[1.6rem] leading-[1.7] max-h-0 overflow-hidden px-[4.5rem] transition-all duration-[.4s] ${
                active === "q3" && "max-h-[100rem] py-[2.8rem]"
              }`}
            >
              Book in advance: Booking your rental car ahead of time can often
              result in lower prices. Compare prices from multiple companies:
              Use websites like Kayak, Expedia, or Travelocity to compare prices
              from multiple rental car companies. Look for discount codes and
              coupons: Search for discount codes and coupons that you can use to
              lower the rental price. Renting from an off-airport location can
              sometimes result in lower prices.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
