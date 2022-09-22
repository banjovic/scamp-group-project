import AboutSection from "../../components/aboutSection/AboutSection";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/faq/Faq";
import HeroSection from "../../components/heroSection/HeroSection";
import Newsletter from "../../components/newsletter/newsletter";
import ProductsSection from "../../components/productsSection/ProductsSection";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-10 px-5 space-y-10">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <Faq />
      <Newsletter />
      <Contact />
    </div>
  );
};

export default HomePage;
