import Image from "next/image";
import book_bg from "../imgs/book-banner.png";

const BookBanner = () => {
  return (
    <section className="mt-[7rem] h-[20rem] max-sm:h-fit max-sm:p-[3rem] relative">
      <Image
        className="absolute right-0 top-0 w-full h-full object-cover"
        src={book_bg}
        alt="Background Image"
      />
      <div className="absolute left-0 top-0 bg-[#2d2d2d] w-full h-full opacity-[.89]"></div>
      <div className="css-container h-full">
        <div className="flex items-center justify-center max-md:flex-col max-md:text-center relative z-10 text-white gap-[5rem] h-full">
          <h2 className="text-[3.2rem] font-bold">
            Book a car by getting in touch with us
          </h2>
          <div className="flex items-center gap-[1rem] text-[2.7rem] text-[#ff4d30] whitespace-nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="tabler-icon tabler-icon-phone"
            >
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
            </svg>
            <h3 className="font-bold">(123) 456-7869</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BookBanner;
