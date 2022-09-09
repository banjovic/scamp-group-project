import { ReactComponent as Stamp } from "../../assets/Stamp.svg";

import "./HeroSection.scss";

const HeroSection = () => {
  return (
    <header className="hero-section flex flex-col overflow-hidden md:flex-row md:mt-10 md:justify-between md:gap-[60px]">
      <div className="flex flex-col items-start space-y-10 md:max-w-[400px] lg:max-w-[600px]">
        <h1 className="title leading-[60px] text-display-sm font-semibold lg:text-display-lg lg:leading-[96px]">
          Round fizzy burst of relaxation
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa nulla
          amet, dolor tellus enim. Blandit in sed enim dictum turpis purus ante
          duis.
        </p>
        <div className="stamp">
          <Stamp />
          <h2 className="shop text-gold">shop</h2>
        </div>
      </div>
      <div className="self-end pt-6 hero-section__image-wrapper md:self-start">
        <img
          src="https://images.pexels.com/photos/7175345/pexels-photo-7175345.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-7175345.jpg&fm=jpg"
          alt="hero section bath bomb feature"
        />
      </div>
    </header>
  );
};

export default HeroSection;
