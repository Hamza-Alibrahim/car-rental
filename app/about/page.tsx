import About from "../components/About";
import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Plan from "../components/Plan";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="About" />
      <About />
      <Plan />
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
