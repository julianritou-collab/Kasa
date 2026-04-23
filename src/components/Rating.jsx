import pinkStar from "../assets/pink-star.png";
import grayStar from "../assets/gray-star.png";

function Rating({ value = 0 }) {
  const rating = Number(value);

  return (
    <div className="rating" aria-label={`Note de ${rating} sur 5`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= rating;

        return (
          <img
            key={star}
            src={isActive ? pinkStar : grayStar}
            alt=""
            aria-hidden="true"
            className="rating__star"
          />
        );
      })}
    </div>
  );
}

export default Rating;