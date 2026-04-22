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
      <img src={pictures[currentIndex]} alt={`${title} - Image ${currentIndex + 1} sur ${totalPictures}`} className="slideshow__image" />
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
