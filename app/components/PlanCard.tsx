import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  decription: string;
}

const PlanCard = ({ img, title, decription }: Props) => {
  return (
    <div className="py-[1rem] px-[6rem] max-[500px]:p-[1rem] text-center">
      <Image className="w-[17rem] mx-auto" src={img} alt={title} />
      <h3 className="mb-[1rem] text-[2.4rem] font-bold ">{title}</h3>
      <p className="text-[1.6rem] font-normal leading-[2.3rem] text-[#706f7b]">
        {decription}
      </p>
    </div>
  );
};
export default PlanCard;
