import Image from "next/image";
import carImgs from "../carImages";
interface Props {
  car: string;
  pickUpDate: string;
  pickUpPlace: string;
  dropOfDate: string;
  dropOfPlace: string;
  setShowBook: () => void;
  setSuccess: () => void;
}

const BookingModel = ({
  car,
  pickUpDate,
  pickUpPlace,
  dropOfDate,
  dropOfPlace,
  setShowBook,
  setSuccess,
}: Props) => {
  return (
    <>
      <div
        onClick={setShowBook}
        className="fixed left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,.3)] z-[888] max-md:hidden"
      />
      <div className="fixed bg-white border-2 border-white text-[#010103] flex flex-col h-screen left-1/2 top-[54%] overflow-x-hidden overflow-y-scroll pr-[.2rem] md:-translate-x-1/2 md:-translate-y-1/2 w-full max-w-[83rem] max-md:top-0 max-md:left-0 z-[999]">
        <div className="flex items-center justify-between bg-[#ff4d30] text-white py-[1rem] px-[1.5rem]">
          <h1 className="text-[2.4rem] uppercase font-bold leading-normal">
            Complete Reservation
          </h1>
          <span onClick={setShowBook} className="cursor-pointer">
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
              className="tabler-icon tabler-icon-x"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-[1.5rem] py-[2rem] px-[3rem] bg-[#ffeae6]">
          <h3 className="flex gap-[.5rem] leading-normal text-[#ff4d30] text-[1.9rem] font-bold">
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
              className="tabler-icon tabler-icon-info-circle-filled"
            >
              <path
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                fill="currentColor"
                strokeWidth="0"
              ></path>
            </svg>{" "}
            Upon completing this reservation enquiry, you will receive:
          </h3>
          <h4 className="text-[#777] text-[1.7rem] font-medium leading-[1.6]">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </h4>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 p-[3rem] border-b border-[#7878789f]">
          <div className="flex flex-col max-sm:items-center gap-[3.2rem]">
            <div className="flex flex-col gap-[2rem]">
              <h5 className="text-[#ff4d30] text-[1.8rem] font-bold leading-normal">
                Location &amp; Date
              </h5>
              <div className="flex gap-[1rem]">
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
                  className="tabler-icon tabler-icon-map-pin-filled"
                >
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    fill="currentColor"
                    strokeWidth="0"
                  ></path>
                </svg>
                <div>
                  <h6 className="text-[1.5rem] leading-normal font-bold mb-[.2rem]">
                    Pick-Up Date &amp; Time
                  </h6>
                  <h5 className="text-[1.6rem] text-[#777] leading-normal">
                    {pickUpDate} /{" "}
                    <input
                      type="time"
                      className="border border-[#767676] rounded-sm text-[1.4rem] text-black"
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex gap-[1rem]">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[1.5rem] leading-normal font-bold mb-[.2rem]">
                  Drop-Off Date &amp; Time
                </h6>
                <h5 className="text-[1.6rem] text-[#777] leading-normal">
                  {dropOfDate} /{" "}
                  <input
                    type="time"
                    className="border border-[#767676] rounded-sm text-[1.4rem] text-black"
                  />
                </h5>
              </div>
            </div>
            <div className="flex gap-[1rem]">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[1.5rem] leading-normal font-bold mb-[.2rem]">
                  Pick-Up Location
                </h6>
                <h5 className="text-[1.6rem] text-[#777] leading-normal">
                  {pickUpPlace}
                </h5>
              </div>
            </div>
            <div className="flex gap-[1rem]">
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
                className="tabler-icon tabler-icon-map-pin-filled"
              >
                <path
                  d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                  fill="currentColor"
                  strokeWidth="0"
                ></path>
              </svg>
              <div>
                <h6 className="text-[1.5rem] leading-normal font-bold mb-[.2rem]">
                  Drop-Off Location
                </h6>
                <h5 className="text-[1.6rem] text-[#777] leading-normal">
                  {dropOfPlace}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col max-sm:items-center max-sm:mt-[3.5rem] gap-[3rem]">
            <h5 className="text-[1.8rem] leading-normal font-bold">
              Car - <span className="text-[#ff4d30]">{car}</span>
            </h5>
            <Image className="w-full" src={carImgs[car]} alt="car_img" />
          </div>
        </div>
        <div className="flex flex-col p-[3rem]">
          <h4 className="text-[#ff4d30] mb-[2rem] text-[1.8rem] leading-normal font-bold uppercase">
            Personal Information
          </h4>
          <form className="info-form">
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[2rem] py-[1rem]">
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  First Name <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="text"
                  placeholder="Enter your first name"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Last Name <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="text"
                  placeholder="Enter your last name"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Phone Number <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="tel"
                  placeholder="Enter your phone number"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Age <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="number"
                  placeholder="18"
                  min={16}
                />
                <span className="leading-normal">This field is required.</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-[2rem] py-[1rem]">
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Email <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="email"
                  placeholder="Enter your email address"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Address <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="text"
                  placeholder="Enter your street address"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[2rem] py-[1rem]">
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  City <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="text"
                  placeholder="Enter your city"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
              <div className="flex flex-col gap-[.4rem]">
                <label className="text-[1.6rem] font-medium text-[#777] leading-normal">
                  Zip Code <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  className="bg-[#dbdbdb] text-[#555] text-[1.5rem] font-medium outline-0 py-[1.4rem] px-[1.5rem]"
                  type="text"
                  placeholder="Enter your zip code"
                />
                <span className="leading-normal">This field is required.</span>
              </div>
            </div>
            <div className="flex gap-[1rem] items-center mt-[2rem] mb-[3rem]">
              <input className="h-[1.6rem] w-[1.6rem]" type="checkbox" />
              <h5 className="text-[1.6rem] text-[#565454] leading-normal">
                Please send me latest news and updates
              </h5>
            </div>
            <div className="bg-[#dbdbdb] p-[3rem] text-end max-sm:text-center mx-[-3rem]">
              <button
                onClick={() => {
                  setShowBook();
                  setSuccess();
                }}
                className="bg-[#ff4d30] border border-[#ff0] text-white text-[2.4rem] font-bold py-[1.2rem] px-[2rem] transition-colors duration-200 hover:bg-[#fe3516]"
              >
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default BookingModel;
