import logements from "../data/logements.json";

// Simule un appel API pour récupérer les logements
export function getAccommodations({ real = false } = {}) {
  if (real) {
    // Appel réel avec fetch
    return fetch("http://localhost:8080/api/properties")
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors du chargement des logements");
        return response.json();
      });
  } else {
    // Simulation locale
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(logements);
      }, 250);
    });
  }
}

// Simule un appel API pour récupérer un logement par son ID
export function getAccommodationById(id, { real = false } = {}) {
  if (real) {
    // Appel réel avec fetch
    return fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error("Erreur lors du chargement du logement");
        return response.json();
      });
  } else {
    // Simulation locale
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const accommodation = logements.find((logement) => logement.id === id);
        if (accommodation) {
          resolve(accommodation);
        } else {
          reject(new Error("Logement non trouvé"));
        }
      }, 250); // simule un vrai appel API
    });
  }
}