import plan1 from "../imgs/plan1.png";
import plan2 from "../imgs/plan2.png";
import plan3 from "../imgs/plan3.png";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <section className="relative z-10 py-[5.3rem]">
      <div className="css-container">
        <div className="w-fit mx-auto text-center">
          <p className="text-[2.4rem] font-medium leading-normal">
            Plan your trip now
          </p>
          <h1 className="text-[4.2rem] font-bold leading-normal mt-[1.3rem] mb-[3rem]">
            Quick & easy car rental
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-y-[2rem] max-lg:grid-cols-2 max-[800px]:grid-cols-1 mt-[3.7rem] px-[3rem]">
          <PlanCard
            img={plan1}
            title="Select Car"
            decription="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
          />
          <PlanCard
            img={plan2}
            title="Contact Operator"
            decription="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
          />
          <PlanCard
            img={plan3}
            title="Let's Drive"
            decription="Whether you're hitting the open road, we've got you covered with our wide range of cars"
          />
        </div>
      </div>
    </section>
  );
};
export default Plan;
