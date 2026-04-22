import { useState } from "react";

function Slideshow({ pictures = [] , title = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;
  const hasMultiplePictures = totalPictures > 1;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  if(totalPictures === 0) {
    return null;
  }

  return (
    <div className="slideshow" aria-label={`Diaporama de ${title}`}>
      <div
        className="slideshow__track"
        style={{
          // Déplace horizontalement la piste de 1 slide (100%) à chaque index.
          transform: "translateX(-" + currentIndex * 100 + "%)",
        }}
      >
        {pictures.map((picture, index) => (
          <div className="slideshow__slide" key={`${picture}-${index}`}>
            <img
              src={picture}
              alt={`${title} - Image ${index + 1} sur ${totalPictures}`}
              className="slideshow__image"
            />
          </div>
        ))}
      </div>
      {hasMultiplePictures && (
        <>
          <button 
            onClick={handlePrevious} 
            className="slideshow__button slideshow__button--left"
            aria-label="Image précédente">
          </button>
          <button
            onClick={handleNext} 
            className="slideshow__button slideshow__button--right" 
            aria-label="Image suivante">
          </button>
          <p className="slideshow__counter">{currentIndex + 1}/{totalPictures}</p>
        </>
      )}
    </div>
  );
}

export default Slideshow;
