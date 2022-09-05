import HeroSection from "../../components/heroSection/HeroSection";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-10 px-5 space-y-10">
      <HeroSection />
      <div className="h-52"></div>
    </div>
  );
};

export default HomePage;
