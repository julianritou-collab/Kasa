import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccommodationById } from "../api/accommodationApi";
import Spinner from "../components/Spinner";
import Slideshow from "../components/Slideshow";

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

  return (
  <section className="accommodation">
    <Slideshow pictures={accommodation.pictures} title={accommodation.title} />
  </section>
);
}

export default Accommodation;