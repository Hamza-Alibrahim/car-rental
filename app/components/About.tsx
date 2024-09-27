import Image from "next/image";
import about from "../imgs/about-main.jpg";
import about1 from "../imgs/about1.png";
import about2 from "../imgs/about2.png";
import about3 from "../imgs/about3.png";

const About = () => {
  return (
    <section>
      <div className="css-container">
        <div className="my-[10rem] mx-auto flex items-center gap-[5rem] max-w-[90rem] max-[960px]:max-w-[49rem] max-[960px]:flex-col">
          <Image
            className="w-[43rem] h-[43rem] max-[520px]:w-full max-[520px]:h-auto"
            src={about}
            alt="About Image"
          />
          <div className="flex flex-col text-[#010103] max-[500px]:text-center">
            <h3 className="text-[2.2rem] font-medium mb-[1rem] font-rubik">
              About Company
            </h3>
            <h2 className="text-[4.2rem] leading-[1.2] font-bold">
              You start the engine and your adventure begins
            </h2>
            <p className="text-[#706f7b] text-[1.6rem] leading-[1.5] mb-[4rem] mt-[2rem]">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="grid grid-cols-3 max-[500px]:grid-cols-1 gap-[4rem]">
              <div className="flex flex-col gap-[1rem] max-[500px]:w-fit max-[500px]:mx-auto max-[500px]:items-center">
                <Image className="w-[7rem]" src={about1} alt="about1" />
                <div className="flex items-center gap-[1rem] max-[500px]:flex-col max-[500px]:text-center">
                  <h4 className="text-[4.6rem] font-bold">20</h4>
                  <p className="text-[1.6rem] text-[#706f7b]">Car Types</p>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem] max-[500px]:w-fit max-[500px]:mx-auto max-[500px]:items-center">
                <Image className="w-[7rem]" src={about2} alt="about2" />
                <div className="flex items-center gap-[1rem] max-[500px]:flex-col max-[500px]:text-center">
                  <h4 className="text-[4.6rem] font-bold">85</h4>
                  <p className="text-[1.6rem] text-[#706f7b]">Rental Outlets</p>
                </div>
              </div>
              <div className="flex flex-col gap-[1rem] max-[500px]:w-fit max-[500px]:mx-auto max-[500px]:items-center">
                <Image className="w-[5rem]" src={about3} alt="about3" />
                <div className="flex items-center gap-[1rem] max-[500px]:flex-col max-[500px]:text-center">
                  <h4 className="text-[4.6rem] font-bold">75</h4>
                  <p className="text-[1.6rem] text-[#706f7b]">Repair Shop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
