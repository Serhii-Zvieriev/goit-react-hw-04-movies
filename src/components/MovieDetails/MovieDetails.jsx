import { useState, useEffect } from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import * as fetchMovie from "../../services/themoviedb-api";

export default function MovieDetails({ movieId }) {
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <div>
      {movie && (
        <>
          <button style={{ display: "block" }}>Go back</button>
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

          <div>
            Additional information
            <ul>
              <li>
                <NavLink to={`${url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
