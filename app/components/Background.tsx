import Image from "next/image";
import bg from "../imgs/heroes-bg.png";
import Link from "next/link";

const Background = ({ section }: { section: string }) => {
  return (
    <section className="relative h-[41rem]">
      <Image
        className="absolute left-0 top-0 w-full h-full object-cover"
        src={bg}
        alt="Background Image"
      />
      <div className="absolute left-0 top-0 w-full h-full bg-[#ffffffeb]"></div>
      <div className="css-container h-full">
        <div className="flex flex-col text-[#010103] h-full justify-center relative z-10">
          <h3 className="text-[3.6rem] font-bold mb-[.5rem]">{section}</h3>
          <p className="text-[1.6rem] font-semibold">
            <Link
              className="transition-colors duration-200 hover:text-[#ff4d30]"
              href="/"
            >
              Home
            </Link>{" "}
            / {section}
          </p>
        </div>
      </div>
    </section>
  );
};
export default Background;
