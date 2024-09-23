"use client";
import Image from "next/image";
import book_bg from "../imgs/book-bg.png";
import { FormEvent, useState } from "react";
import BookingModel from "./BookingModel";

const Book = () => {
  const [car, setCar] = useState("");
  const [pickUpPlace, setPickUpPlace] = useState("");
  const [dropOfPlace, setDropOfPlace] = useState("");
  const [pickUpDate, setPickUpDate] = useState("");
  const [dropOfDate, setDropOfDate] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showBook, setShowBook] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // if (!car || !pickUpDate || !pickUpPlace || !dropOfDate || !dropOfPlace)
    //   setError(true);
    // else {
    setError(false);
    setShowBook(true);
    // }
  }
  document.body.style.overflow = showBook ? "hidden" : "auto";
  return (
    <section className="bg-[linear-gradient(180deg,#f8f8f8_20%,#fff_80%)]">
      <div className="css-container">
        <div className="relative mb-[10rem] shadow-book rounded-[.5rem] text-[#010103] p-[5rem] max-sm:p-[2rem] flex flex-col w-full z-10 bg-white">
          <Image
            className="absolute left-0 top-0 w-full h-full -z-10"
            src={book_bg}
            alt="Background Image"
          />
          <h2 className="text-[2.4rem] font-bold mb-[2.7rem] leading-normal">
            Book a car
          </h2>
          {success && (
            <div className="flex items-center justify-between bg-[#c3fabe] text-[#2a6817] rounded-[.8rem] text-[1.6rem] font-medium py-[1rem] px-[1.4rem] -mt-[1rem] mb-[1.8rem]">
              Check your email to confirm an order.{" "}
              <span
                onClick={() => setSuccess(false)}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-x"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </span>
            </div>
          )}
          {error && (
            <div className="flex items-center justify-between bg-[#f8d7da] text-[#721c24] rounded-[.8rem] text-[1.6rem] font-medium py-[1rem] px-[1.4rem] -mt-[1rem] mb-[1.8rem]">
              All fields required!{" "}
              <span onClick={() => setError(false)} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-x"
                >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </span>
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[2rem]"
          >
            <div className="flex flex-col">
              <label className="flex items-center text-[1.6rem] font-semibold mb-[1.2rem] leading-normal">
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
                  className="input-icon"
                >
                  <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                  <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
                </svg>{" "}
                &nbsp; Select Your Car Type <b className="text-[#ff4d30]">*</b>
              </label>
              <select
                onChange={(e) => setCar(e.target.value)}
                className="border border-[#ccd7e6] rounded-[.3rem] text-[#ababab] text-[1.5rem] font-normal outline-0 py-[1.2rem] px-[1.3rem]"
              >
                <option>Select your car type</option>
                <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                <option value="VW Golf 6">VW Golf 6</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                <option value="VW Passat CC">VW Passat CC</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-[1.6rem] font-semibold mb-[1.2rem] leading-normal">
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
                  className="input-icon"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>{" "}
                &nbsp; Pick-up <b className="text-[#ff4d30]">*</b>
              </label>
              <select
                onChange={(e) => setPickUpPlace(e.target.value)}
                className="border border-[#ccd7e6] rounded-[.3rem] text-[#ababab] text-[1.5rem] font-normal outline-0 py-[1.2rem] px-[1.3rem]"
              >
                <option>Select pick up location</option>
                <option>Belgrade</option>
                <option>Novi Sad</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="flex items-center text-[1.6rem] font-semibold mb-[1.2rem] leading-normal">
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
                  className="input-icon"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>{" "}
                &nbsp; Drop-of <b className="text-[#ff4d30]">*</b>
              </label>
              <select
                onChange={(e) => setDropOfPlace(e.target.value)}
                className="border border-[#ccd7e6] rounded-[.3rem] text-[#ababab] text-[1.5rem] font-normal outline-0 py-[1.2rem] px-[1.3rem]"
              >
                <option>Select drop off location</option>
                <option>Novi Sad</option>
                <option>Belgrade</option>
                <option>Nis</option>
                <option>Kragujevac</option>
                <option>Subotica</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="flex items-center text-[1.6rem] font-semibold mb-[1.2rem] leading-normal"
                htmlFor="picktime"
              >
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
                  className="input-icon"
                >
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M8 15h2v2h-2z"></path>
                </svg>{" "}
                &nbsp; Pick-up <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                onChange={(e) => setPickUpDate(e.target.value)}
                className="border border-[#ccd7e6] rounded-[.3rem] text-[#878585] text-[1.3rem] font-normal outline-0 py-[1.2rem] pl-[1.3rem] pr-[3rem] w-full"
                id="picktime"
                type="date"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="flex items-center text-[1.6rem] font-semibold mb-[1.2rem] leading-normal"
                htmlFor="droptime"
              >
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
                  className="input-icon"
                >
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M8 15h2v2h-2z"></path>
                </svg>{" "}
                &nbsp; Drop-of <b className="text-[#ff4d30]">*</b>
              </label>
              <input
                onChange={(e) => setDropOfDate(e.target.value)}
                className="border border-[#ccd7e6] rounded-[.3rem] text-[#878585] text-[1.3rem] font-normal outline-0 py-[1.2rem] pl-[1.3rem] pr-[3rem] w-full"
                id="droptime"
                type="date"
              />
            </div>
            <button
              className="text-white font-medium text-[1.8rem] bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link p-[1.1rem] transition-[box-shadow,background-color] duration-300 hover:shadow-xlink-hover hover:bg-[#fa4226] w-full self-end leading-normal"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        {showBook && <BookingModel />}
      </div>
    </section>
  );
};
export default Book;
