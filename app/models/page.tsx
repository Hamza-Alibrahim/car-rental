import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import GridCard from "../components/GridCard";
import Navbar from "../components/Navbar";
import carsDetails from "../data/carsDetails";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="Vehicle Models" />
      <GridCard>
        {carsDetails.map((car) => {
          return <Card key={car.id} {...car} />;
        })}
      </GridCard>
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
