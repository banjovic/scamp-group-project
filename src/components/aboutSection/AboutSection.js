const AboutSection = () => {
  return (
    <section
      aria-labelledby="about-tile"
      className="space-y-[33px] md:flex md:gap-[33px]"
    >
      <div className="md:flex-1 md:self-end">
        <h2 id="about-title" className="title text-[50px]">
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
      </div>
      <img
        src="https://images.pexels.com/photos/7175345/pexels-photo-7175345.jpeg?cs=srgb&dl=pexels-marta-dzedyshko-7175345.jpg&fm=jpg"
        alt="hero section bath bomb feature"
        className="h-[16.25rem] w-full object-cover md:flex-1 md:max-h-[500px] md:h-full"
      />
    </section>
  );
};
export default AboutSection;
