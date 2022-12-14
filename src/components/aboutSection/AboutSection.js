import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-tile"
      className="space-y-[33px] md:grid md:grid-cols-2 md:gap-[33px] md:pt-10"
    >
      <div className="md:self-end">
        <h2 id="about-title" className="title">
          Our Story
        </h2>
        <h3 className="text-gold text-3xl">
          “You can’t become the best without first being the worst”
        </h3>
        <p className="mt-10 leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget eu ut
          facilisis rhoncus morbi. Lorem ultrices blandit quam quam. Sagittis,
          faucibus sit gravida cursus nunc sed vestibulum sed. Tellus, porttitor
          pellentesque posuere diam nisi, nunc enim non. faucibus sit gravida
          cursus nunc sed vestibulum sed. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Eget eu ut facilisis rhoncus morbi. Lorem
          ultrices blandit quam quam.{" "}
        </p>
        <Link to={"/about"}>
          <p className="text-lightGold pt-2 italic">Read More...</p>
        </Link>
      </div>
      <img
        src="https://images.pexels.com/photos/374039/pexels-photo-374039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero section bath bomb feature"
        className="h-[16.25rem] w-full object-cover md:self-end md:max-h-[400px] md:h-full md:max-w-[660px] lg:max-h-[500px]"
      />
    </section>
  );
};
export default AboutSection;
