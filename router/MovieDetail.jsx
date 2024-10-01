import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "../src/components/Cast";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState({});
  let { id } = useParams();
  console.log(`id: ${id}`);
  const MOVIE_DETAIL_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;

  const getMovieDetail = async () => {
    const response = await fetch(MOVIE_DETAIL_URL);
    const json = await response.json();
    setMovieDetail(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log("movieDetails: ", movieDetail);
  // if (movieDetails.cast) alert("CAST EXISTS");
  // else alert("CAST DOES NOT EXIST");

  return (
    <>
      <h2>{movieDetail.title_long}</h2>
      <div>
        <img src={movieDetail.large_cover_image} alt={movieDetail.title} />
        <div>🥰좋아요: {movieDetail.like_count}</div>
        <div>✨평점: {movieDetail.rating}</div>
        <ul className="cast-container">
         {Array.isArray(movieDetail.cast) ? movieDetail.cast.map((cast, index) => 
         <Cast key={index} 
              coverImage={cast.url_small_image}
              name={cast.name}
              characterName={cast.character_name}
         />
        ) : null}
        </ul>
        <br />
      </div>
    </>
  );
};

export default MovieDetail;
