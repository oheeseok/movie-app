import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import "../src/App.css";
import Movie from "../src/components/Movie";

function MovieHome() {
  const MOVIE_URL = "https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=50";
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // console.log(isLoading, setIsLoading);
  const getMovies = async () => {
    const response = await fetch(MOVIE_URL);
    const json = await response.json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log("movies: ", movies);
  // console.log("movies[0].genres: ", movies[0].genres);

  return (
    <>
      <h1>Movie App!</h1>
      {isLoading ? (
        <div className="loading-container">
          <BeatLoader color="#3498db" size={50} />
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MovieHome;
