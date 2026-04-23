function TagList({ tags = [] }) {
  return (
    <ul className="tag-list" aria-label="Étiquettes du logement">
      {tags.map((tag) => (
        <li key={tag} className="tag-list__item">{tag}</li>
      ))}
    </ul>
  );
}

export default TagList;