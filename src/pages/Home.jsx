import { useState, useEffect } from "react";
import { getAccommodations } from "../api/accommodationApi";
import Banner from "../components/Banner";
import homeBanner from "../assets/home-banner.webp";
import Card from "../components/Card";
import Spinner from "../components/Spinner";


function Home() {
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccommodations()
      .then((data) => setAccommodations(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    console.error("Erreur lors du chargement des logements :", error);
    return <p className="home__error">Site indisponible pour le moment. Veuillez réessayer plus tard.</p>;
  }

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