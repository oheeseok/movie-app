import "../App.css";

function Cast({ coverImage, name, characterName }) {
  return (
    <>
      <div className="cast">
        <img src={coverImage} alt="cover_image" />
        <p>{name}</p>
        <p>{characterName}</p>
      </div>
    </>
  );
}

export default Cast;
