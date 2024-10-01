import PropTypes from "prop-types";
import { Link, Routes } from "react-router-dom";

function Movie({ id, coverImage, title, year, summary, genres = [] }) {
  return (
    <>
      <div className="movie">
        <img src={coverImage} alt={title} title={title} />
        <div className="movie__data">
          <Link className="link" to={`/details/${id}`}>
            <h3 className="movie__title">
              {title}({id})
            </h3>
          </Link>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </>
  );
}

Movie.prototype = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
