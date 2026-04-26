import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccommodationById } from "../api/accommodationApi";
import Spinner from "../components/Spinner";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Host from "../components/Host";
import TagList from "../components/TagList";
import Collapse from "../components/Collapse";

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAccommodationById(id)
      .then((data) => setAccommodation(data))
      .catch(() => {
        navigate("/not-found");
      })
      .finally(() => setLoading(false));
  }, [id, navigate]);


  if (loading) {
    return <Spinner />;
  }

  //correction pb quand je suis déja sur la page d'un logement et que je modifie l'Id dans l'url.
  if (!accommodation) {
    return null; 
  }

  return (
  <section className="accommodation">
    <Slideshow pictures={accommodation.pictures} title={accommodation.title} />
    <div className="accommodation__summary">
      <div className="accommodation__left">
        <div className="accommodation__title-and-location">
          <h1 className="accommodation__title">{accommodation.title}</h1>
          <p className="accommodation__location">{accommodation.location}</p>
        </div>
        <TagList tags={accommodation.tags} />
      </div>
      <div className="accommodation__right">
        <Host name={accommodation.host.name} picture={accommodation.host.picture} />
        <Rating value={accommodation.rating} />
      </div>
    </div>
    <div className="accommodation__collapses">
      <Collapse title="Description">
        <p>{accommodation.description}</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {accommodation.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  </section>
);
}

export default Accommodation;