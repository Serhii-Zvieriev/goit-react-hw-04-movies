import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as fetchMovie from "../services/themoviedb-api";

export default function MovieDetailsView() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          {console.log(movie)}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>Popularity: {movie.popularity}</p>
          <div>
            Genres:{" "}
            <ul>
              {movie.genres
                ? movie.genres.map(({ id, name }) => <li key={id}>{name}</li>)
                : "not genres"}
            </ul>
          </div>
        </>
      )}
    </>
  );
}
