import AboutSection from "../../components/aboutSection/AboutSection";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/heroSection/HeroSection";
import Newsletter from "../../components/newsletter/newsletter";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-10 px-5 space-y-10">
      <HeroSection />
      <AboutSection />
      <Faq />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
