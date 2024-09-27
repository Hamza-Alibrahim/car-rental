import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
  Doors: string;
  Transmission: string;
  Fuel: string;
  price: number;
  car: string;
  carModel: string;
  img: StaticImageData;
}

const Card = (car: Props) => {
  const starCount = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="border border-[#d5d5d5] rounded-[.3rem] flex flex-col overflow-hidden w-[35rem] max-[400px]:w-full">
      <Image className="h-[27rem] w-full" src={car.img} alt="Car Image" />
      <div className="text-[#010103] flex flex-col py-[2rem] px-[3rem]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[.5rem]">
            <h2 className="text-[2.4rem] font-bold">{car.car}</h2>
            <span className="flex gap-[.4rem]">
              {starCount.map((i) => {
                return (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-star"
                  >
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
                  </svg>
                );
              })}
            </span>
          </div>
          <div className="flex flex-col text-end">
            <h1 className="text-[2.8rem] font-bold">${car.price}</h1>
            <p className="text-[1.6rem] font-poppins">per day</p>
          </div>
        </div>
        <div className="border-b border-[#c6c6c6] gap-x-[7rem] gap-y-[2rem] grid grid-cols-2 my-[2rem] mx-auto pb-[2.5rem] w-full max-[400px]:grid-cols-1">
          <span className="text-[#777] text-[1.8rem] font-medium flex whitespace-nowrap">
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
              className="tabler-icon tabler-icon-car shrink-0"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>{" "}
            &nbsp; {car.carModel}
          </span>
          <span className="text-[#777] text-[1.8rem] font-medium flex whitespace-nowrap justify-end">
            {car.Doors} &nbsp;{" "}
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
              className="tabler-icon tabler-icon-car shrink-0"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>
          </span>
          <span className="text-[#777] text-[1.8rem] font-medium flex whitespace-nowrap">
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
              className="tabler-icon tabler-icon-car shrink-0"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>{" "}
            &nbsp; {car.Transmission}
          </span>
          <span className="text-[#777] text-[1.8rem] font-medium flex whitespace-nowrap justify-end">
            {car.Fuel} &nbsp;{" "}
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
              className="tabler-icon tabler-icon-car shrink-0"
            >
              <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path>
            </svg>
          </span>
        </div>
        <Link
          className="bg-[#ff4d30] border-2 border-[#ff4d30] rounded-[.3rem] shadow-link cursor-pointer text-[1.8rem] py-[1.8rem] px-[3rem] transition-[background-color,box-shadow] duration-300 text-white font-bold text-center h-[6.7rem] hover:bg-[#fa4226] hover:shadow-xlink-hover"
          href="/"
        >
          Book Ride
        </Link>
      </div>
    </div>
  );
};
export default Card;
