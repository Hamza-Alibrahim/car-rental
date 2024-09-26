import Image from "next/image";
import download_bg from "../imgs/download-bg.png";
import googleapp from "../imgs/googleapp.svg";
import appstore from "../imgs/appstore.svg";

const Download = () => {
  return (
    <section className="relative bg-[#f8f8f8] py-[10rem]">
      <Image
        className="absolute bottom-0 right-0 max-[700px]:hidden h-full object-cover"
        src={download_bg}
        alt="Background Image"
      />
      <div className="css-container">
        <div className="relative z-10 flex flex-col max-[700px]:text-center max-[700px]:mx-auto gap-[2rem] max-w-[55rem]">
          <h2 className="text-[4.2rem] text-[#010103] font-bold">
            Download our app to get most out of it
          </h2>
          <p className="text-[#706f7b] text-[1.6rem] font-normal leading-[1.5]">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="flex max-[700px]:justify-center max-xsm:flex-col max-xsm:items-center gap-[3rem] mt-[2rem]">
            <Image
              className="w-[40%] max-xsm:w-[22rem] cursor-pointer"
              src={googleapp}
              alt="googleapp"
            />
            <Image
              className="w-[40%] max-xsm:w-[22rem] cursor-pointer"
              src={appstore}
              alt="appstore"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Download;
