import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import GridCard from "../components/GridCard";
import Navbar from "../components/Navbar";
import PersonCard from "../components/PersonCard";
import teamData from "../data/teamData";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="Our Team" />
      <GridCard>
        {teamData.map((person) => {
          return <PersonCard key={person.id} {...person} />;
        })}
      </GridCard>
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
