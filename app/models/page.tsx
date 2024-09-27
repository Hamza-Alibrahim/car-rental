import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import GridCard from "../components/GridCard";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="Vehicle Models" />
      <GridCard />
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
