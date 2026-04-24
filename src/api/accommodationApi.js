import logements from "../data/logements.json";

// Simule un appel API pour récupérer les logements
export function getAccommodations() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(logements);
    }, 250); // simule un vrai appel API
  });
}

// Simule un appel API pour récupérer un logement par son ID
export function getAccommodationById(id) {
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