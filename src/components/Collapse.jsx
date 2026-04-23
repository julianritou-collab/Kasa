import { useState, useRef, useLayoutEffect } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const bodyRef = useRef(null);

  // Met à jour la hauteur du corps du collapse lorsque les enfants changent
  // pour permettre une transition fluide à l'ouverture.
  useLayoutEffect(() => {
   const updateHeight = () => { 
      if (bodyRef.current) {
        setHeight(bodyRef.current.scrollHeight); 
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
      >
        <span className="collapse__title">{title}</span>
        <span className="collapse__icon" aria-hidden="true" />
      </button>
      <div 
        className="collapse__body" 
        ref={bodyRef}
        style={{ maxHeight: isOpen ? `${height}px` : "0" }} // max-height dynamique pour permettre la transition d'ouverture fluide
      >
        <div className="collapse__content">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;