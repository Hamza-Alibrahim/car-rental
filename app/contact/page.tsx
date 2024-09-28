import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="Contact" />
      <Contact />
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
