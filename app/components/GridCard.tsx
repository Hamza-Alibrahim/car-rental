import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GridCard = ({ children }: Props) => {
  return (
    <section className="py-[10rem]">
      <div className="css-container">
        <div className="w-[110rem] grid gap-[3rem] grid-cols-3 max-[1150px]:grid-cols-2 max-[1150px]:w-fit max-[400px]:w-full max-[800px]:grid-cols-1 mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
};
export default GridCard;
