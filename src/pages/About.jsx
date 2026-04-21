import Banner from "../components/Banner";
import aboutBanner from "../assets/about-banner.webp";

function About() {
  return (
    <>
      <Banner
        titles={["À propos"]}
        image={aboutBanner}
        opacity={0.3}
        titleHidden={true}
      />
    </>
  );
}

export default About;