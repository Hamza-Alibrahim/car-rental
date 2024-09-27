import carsDetails from "../data/carsDetails";
import Card from "./Card";

const GridCard = () => {
  return (
    <section className="py-[10rem]">
      <div className="css-container">
        <div className="w-[110rem] grid gap-[3rem] grid-cols-3 max-[1150px]:grid-cols-2 max-[1150px]:w-fit max-[800px]:grid-cols-1 justify-center mx-auto">
          {carsDetails.map((car) => {
            return <Card key={car.id} {...car} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default GridCard;
