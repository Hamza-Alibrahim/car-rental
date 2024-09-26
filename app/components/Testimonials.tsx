/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import p1 from "../imgs/pfp1.jpg";
import p2 from "../imgs/pfp2.jpg";

const Testimonials = () => {
  return (
    <section className="bg-[#f8f8f8] text-[#010103] py-[10rem]">
      <div className="css-container">
        <div className="text-center max-w-[70rem] mx-auto mb-[5rem]">
          <h4 className="font-rubik text-[2.2rem] font-medium">
            Reviewed by People
          </h4>
          <h2 className="text-[4.2rem] font-bold mb-[1.4rem]">
            Client's Testimonials
          </h2>
          <p className="text-[#706f7b] text-[1.6rem] font-normal leading-[1.4]">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex gap-[3rem] justify-center p-[3rem] max-lg:p-0">
          <div className="p-[5.5rem] relative bg-white shadow-experiences w-[54rem] max-lg:px-[3rem] max-lg:py-[5rem] transition-[padding]">
            <span className="absolute right-[4rem] bottom-[4rem] text-[#ff4d30] max-xsm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-quote"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </span>
            <p className="text-[2.2rem] font-medium font-poppins">
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were very affordable. "
            </p>
            <div className="flex items-center mt-[3rem] gap-[2rem]">
              <Image
                className="w-[7rem] h-[7rem] rounded-full"
                src={p1}
                alt="Person 1"
              />
              <div>
                <h4 className="text-[1.8rem] font-bold">Parry Hotter</h4>
                <p className="text-[1.6rem] font-normal">Belgrade</p>
              </div>
            </div>
          </div>
          <div className="p-[5.5rem] relative bg-white shadow-experiences w-[54rem] max-[900px]:hidden">
            <span className="absolute right-[4rem] bottom-[4rem] text-[#ff4d30]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-quote"
              >
                <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
                <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
              </svg>
            </span>
            <p className="text-[2.2rem] font-medium font-poppins">
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </p>
            <div className="flex items-center mt-[3rem] gap-[2rem]">
              <Image
                className="w-[7rem] h-[7rem] rounded-full"
                src={p2}
                alt="Person 2"
              />
              <div>
                <h4 className="text-[1.8rem] font-bold">Ron Rizzly</h4>
                <p className="text-[1.6rem] font-normal">Novi Sad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
