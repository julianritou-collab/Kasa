function Host({ name = "", picture = "" }) {
  // Oups pas de split avec removeEmpty 
  const parts = name.trim().split(/\s+/); //regex espace blanc ... (un ou plusieurs)
  const lastName = parts.length > 1 ? parts[parts.length - 1] : "";
  const firstName = parts.length > 1 ? parts.slice(0, -1).join(" ") : parts[0] || "";

  return (
    <div className="host">
      <p className="host__name">
        <span>{firstName}</span>
        {lastName && <span>{lastName}</span>}
      </p>
      <img 
        className="host__picture"
        src={picture}
        alt={`Photo de ${name}`}
        width="64px"
        height="64px"
      />
    </div>
  );
}

export default Host;