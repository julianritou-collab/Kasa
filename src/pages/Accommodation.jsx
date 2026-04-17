import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccommodationById } from "../api/accommodationApi";

function Accommodation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [accommodation, setAccommodation] = useState(null);

  useEffect(() => {
    getAccommodationById(id)
      .then((data) => setAccommodation(data))
      .catch(() => {
        navigate("/not-found");
      });
  }, [id, navigate]);

  if (!accommodation) {
    return null;
  }

  return <h1>Fiche logement "{accommodation.title}"</h1>;
}

export default Accommodation;