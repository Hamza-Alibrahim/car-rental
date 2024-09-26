import Banner from "./components/Banner";
import Book from "./components/Book";
import Choose from "./components/Choose";
import FAQ from "./components/FAQ";
import GoUp from "./components/GoUp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pick from "./components/Pick";
import Plan from "./components/Plan";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <GoUp />
      <Navbar />
      <Hero />
      <Book />
      <Plan />
      <Pick />
      <Banner />
      <Choose />
      <Testimonials />
      <FAQ />
    </>
  );
}
