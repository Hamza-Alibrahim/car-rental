import Image from "next/image";
import hero_bg from "../imgs/hero-bg.png";
import main_car from "../imgs/main-car.png";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="relative h-[97vh] bg-[#f8f8f8]">
      <Image
        className="absolute right-0 top-0 max-[800px]:hidden"
        src={hero_bg}
        alt="Background Image"
      />
      <div className="css-container">
        <div className="flex items-center max-[800px]:justify-center max-[800px]:text-center relative h-screen">
          <div className="max-w-[50rem] mt-[5rem] relative z-10">
            <p className="text-[2.2rem] font-bold leading-normal text-[#010103]">
              Plan your trip now
            </p>
            <h1 className="text-[5.2rem] font-bold leading-[6.2rem] mt-[1rem] mb-[2.3rem] text-[#010103]">
              Save <span className="text-[#ff4d30]">big</span> with our car
              rental
            </h1>
            <p className="text-[#706f7b] text-[1.6rem] mb-[4rem] leading-[2.6rem]">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="flex gap-[2rem] max-[800px]:justify-center max-[450px]:flex-col max-[450px]:items-center">
              <Link
                className="flex items-center text-white font-bold text-[1.6rem] bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link py-[1.8rem] px-[3rem] transition-[box-shadow,background-color] duration-300 hover:shadow-link-hover hover:bg-[#fa4226] max-[450px]:w-full max-[450px]:justify-center max-[450px]:max-w-[28rem]"
                href="/"
              >
                Book Ride &nbsp;{" "}
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
                  className="tabler-icon tabler-icon-circle-check"
                >
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
              </Link>
              <Link
                className="w-fit flex items-center text-white font-bold text-[1.6rem] bg-[#010103] border-2 border-[#010103] rounded-[.3rem] py-[1.8rem] px-[3rem] transition-[color,background-color] duration-300 hover:text-[#010103] hover:bg-transparent max-[450px]:w-full max-[450px]:justify-center max-[450px]:max-w-[28rem]"
                href="/"
              >
                Learn More &nbsp;{" "}
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
                  className="tabler-icon tabler-icon-chevron-right"
                >
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
          </div>
          <Image
            className="absolute right-0 w-[65%] mt-[5rem] max-[800px]:hidden"
            src={main_car}
            alt="Main Car"
          />
        </div>
      </div>
    </main>
  );
};
export default Hero;
