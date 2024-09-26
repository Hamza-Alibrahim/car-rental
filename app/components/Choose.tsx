/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import choose_bg from "../imgs/choose-bg.png";
import main from "../imgs/main.png";
import choose1 from "../imgs/choose1.png";
import choose2 from "../imgs/choose2.png";
import choose3 from "../imgs/choose3.png";
import Link from "next/link";

const Choose = () => {
  return (
    <section className="relative pt-[2rem] pb-[10rem]">
      <Image
        className="absolute left-0 bottom-0 -z-10"
        src={choose_bg}
        alt="Background Image"
      />
      <div className="css-container">
        <div className="flex flex-col">
          <div className="w-full">
            <Image
              className="w-[90%] mx-auto max-xsm:w-full"
              src={main}
              alt="main"
            />
          </div>
          <div className="flex justify-around max-lg:flex-col max-lg:items-center max-lg:gap-[5.5rem] mt-[3rem]">
            <div className="text-[#010103] max-w-[50rem] flex flex-col max-lg:text-center">
              <h3 className="font-rubik text-[2.2rem] font-semibold mb-[.7rem]">
                Why Choose Us
              </h3>
              <h2 className="text-[4.2rem] font-bold mb-[2rem] leading-[1.2]">
                Best valued deals you will ever find
              </h2>
              <p className="text-[#706f7b] text-[1.6rem] leading-[1.5] mb-[3.3rem] font-normal">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <Link
                className="bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link text-white text-[1.6rem] font-bold py-[1.5rem] px-[2.5rem] transition-[box-shadow,background-color] duration-300 flex w-fit hover:bg-[#fa4226] hover:shadow-xlink-hover max-lg:mx-auto"
                href="#home"
              >
                Find Details &nbsp;
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
            <div className="flex flex-col gap-[4.5rem] max-w-[44rem]">
              <div className="flex max-xsm:flex-col max-xsm:items-center">
                <Image
                  className="h-[11rem] w-[11rem] xsm:mr-[1.1rem]"
                  src={choose1}
                  alt="Choose Image"
                />
                <div className="flex flex-col gap-[1rem] max-xsm:text-center">
                  <h4 className="text-[2.4rem] font-bold">
                    Cross Country Drive
                  </h4>
                  <p className="text-[1.6rem] text-[#706f7b] font-normal leading-[1.3]">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="flex max-xsm:flex-col max-xsm:items-center">
                {" "}
                <Image
                  className="h-[11rem] w-[11rem] xsm:mr-[1.1rem]"
                  src={choose2}
                  alt="Choose Image"
                />{" "}
                <div className="flex flex-col gap-[1rem] max-xsm:text-center">
                  <h4 className="text-[2.4rem] font-bold">
                    All Inclusive Pricing
                  </h4>
                  <p className="text-[1.6rem] text-[#706f7b] font-normal leading-[1.3]">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="flex max-xsm:flex-col max-xsm:items-center">
                {" "}
                <Image
                  className="h-[11rem] w-[11rem] xsm:mr-[1.1rem]"
                  src={choose3}
                  alt="Choose Image"
                />{" "}
                <div className="flex flex-col gap-[1rem] max-xsm:text-center">
                  <h4 className="text-[2.4rem] font-bold">No Hidden Charges</h4>
                  <p
                    className="text-[1.6rem]
                    text-[#706f7b] font-normal leading-[1.3]"
                  >
                    Enjoy peace of mind with our no hidden charges policy. We
                    believe in transparent and honest p ricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Choose;
