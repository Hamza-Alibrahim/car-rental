const Banner = () => {
  return (
    <section className="my-[8rem] py-[6rem] bg-[#2d2d2d]">
      <div className="css-container flex flex-col gap-[1.5rem] text-center text-white">
        <h1 className="text-[5.2rem] font-bold leading-[6.2rem] max-[550px]:text-[4.2rem] max-[550px]:leading-[5.5rem]">
          Save big with our cheap car rental!
        </h1>
        <h3 className="text-[2.4rem] font-normal leading-normal max-[550px]:text-[2rem]">
          Top Airports. Local Suppliers.{" "}
          <span className="text-[#ff4d30]">24/7</span> Support.
        </h3>
      </div>
    </section>
  );
};
export default Banner;
