import { useState, useEffect } from "react";
import { getAccommodations } from "../api/accommodationApi";
import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.webp";
import Card from "../components/Card";

function Home() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    getAccommodations().then((data) => setAccommodations(data));
  }, []);

  return (
    <>
      <Banner
        titles={["Chez vous,", "partout et ailleurs"]}
        image={homeBanner}
      />
      <section className="home__gallery">
        <h2 className="sr-only">Nos logements</h2>
        <ul className="home__list">
          {accommodations.map((accommodation) => (
            <li key={accommodation.id}>
              <Card
                id={accommodation.id}
                title={accommodation.title}
                cover={accommodation.cover}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;