import Banner from "./components/Banner";
import GoUp from "./components/GoUp";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plan from "./components/Plan";

export default function Home() {
  return (
    <>
      <GoUp />
      <Navbar />
      <Hero />
      <Plan />
      <Banner />
    </>
  );
}
