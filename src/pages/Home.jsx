import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.webp";

function Home() {
  return (
    <>
      <Banner
        titles={["Chez vous,", "partout et ailleurs"]}
        image={homeBanner}
      />
    </>
  );
}

export default Home;