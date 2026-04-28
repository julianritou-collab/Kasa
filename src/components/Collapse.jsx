import { useState, useRef, useLayoutEffect, useId } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const bodyRef = useRef(null);

  const collapseId = useId(); // Génère un ID unique pour l'accessibilité
  const buttonId = `${collapseId}-button`;
  const contentId = `${collapseId}-content`;


  // Met à jour la hauteur du corps du collapse lorsque les enfants changent
  // pour permettre une transition fluide à l'ouverture.
  useLayoutEffect(() => {
   const updateHeight = () => { 
      if (isOpen && bodyRef.current) {
        setHeight(bodyRef.current.scrollHeight); 
      } else {
        setHeight(0); 
      }
    };
    updateHeight();
    // Met à jour la hauteur aussi pour s'adapter à d'éventuels changements de layout
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [children, isOpen]); // Recalcule la hauteur à chaque changement de contenu ou d'état d'ouverture

  return (
    <div className={`collapse${isOpen ? " collapse--open" : ""}`}>
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={buttonId}
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__icon" aria-hidden="true" />
      </button>
      <div 
        className="collapse__body" 
        ref={bodyRef}
        style={{ maxHeight: `${height}px` }} // max-height dynamique pour permettre la transition d'ouverture fluide
        id={contentId}
        aria-labelledby={buttonId}
        role="region" // Indique que c'est une région de contenu liée au bouton
      >
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;