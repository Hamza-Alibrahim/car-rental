import Background from "../components/Background";
import BookBanner from "../components/BookBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const page = () => {
  return (
    <>
      <Navbar />
      <Background section="Testimonials" />
      <Testimonials />
      <BookBanner />
      <Footer />
    </>
  );
};
export default page;
