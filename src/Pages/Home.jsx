import ApplianceCard from "../components/ApplianceCard";
import Hero from "../components/Hero";
import FurnitureCard from "../components/FurnitureCard";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Process from "../components/Process";

function Home() {
  return (
    <>
      <Hero />
      <ApplianceCard />
      <FurnitureCard />
      <Banner />
      <Process />
      <Testimonials />
      <Faq />
      <Footer />
    </>
  );
}

export default Home;
