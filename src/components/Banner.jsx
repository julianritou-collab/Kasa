function Banner({ titles = [], image, opacity = 0.6 }) {
  return (
    <div
      className="hulk"
      style={{ backgroundImage: `url(${image})`, '--banner-opacity': opacity }}
    >
      <h1 className="hulk__title">
        {titles.map((line, index) => (
          <span key={index}>
            {index > 0 && <span className="newline-mobile"> </span>}
            {line}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Banner;