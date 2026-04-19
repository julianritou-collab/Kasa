import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccommodationById } from "../api/accommodationApi";
import Spinner from "../components/Spinner";

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


  return <h1>Fiche logement "{accommodation.title}"</h1>;
}

export default Accommodation;