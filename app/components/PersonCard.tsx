import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  name: string;
  job: string;
}

const PersonCard = ({ img, name, job }: Props) => {
  return (
    <div className="bg-white w-[35rem] shadow-person max-[400px]:w-full">
      <div className="w-full h-auto bg-[#f6f6f6]">
        <Image className="w-full" src={img} alt="Person Image" />
      </div>
      <div className="p-[3rem] text-center">
        <h3 className="text-[2.2rem] font-bold text-[#010103]">{name}</h3>
        <p className="text-[#777] font-poppins text-[1.6rem] font-medium">
          {job}
        </p>
      </div>
    </div>
  );
};
export default PersonCard;
