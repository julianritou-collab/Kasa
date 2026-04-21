import { useState, useRef, useEffect } from "react";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const bodyRef = useRef(null);

  // Met à jour la hauteur du corps du collapse lorsque les enfants changent
  // pour permettre une transition fluide à l'ouverture.
  useEffect(() => {
    if (bodyRef.current) {
      setHeight(bodyRef.current.scrollHeight);
    }
  }, [children]);

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