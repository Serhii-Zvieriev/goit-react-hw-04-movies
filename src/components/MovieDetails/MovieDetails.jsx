import { useState, useEffect } from "react";
import {
  NavLink,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";

import * as fetchMovie from "../../services/themoviedb-api";
import styles from "./MovieDetails.module.css";

export default function MovieDetails({ movieId }) {
  const { url } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();

  function handleGoBack() {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  }

  useEffect(() => {
    fetchMovie.getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <></>;
  }

  return (
    <div>
      {movie && (
        <>
          <button
            className={styles.btn}
            onClick={handleGoBack}
            style={{ display: "block" }}
          >
            &#10229; Go back
          </button>
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
                ? movie.genres.map(({ id, name }) => (
                    <li key={id} className={styles.li}>
                      {name}
                    </li>
                  ))
                : "not genres"}
            </ul>
          </div>

          <div>
            Additional information
            <ul>
              <li className={styles.li}>
                <NavLink
                  className={styles.a}
                  activeClassName={styles.activeLink}
                  to={{
                    pathname: `${url}/cast`,
                    state: { ...location.state, id: movieId },
                  }}
                >
                  Cast
                </NavLink>
              </li>

              <li className={styles.li}>
                <NavLink
                  className={styles.a}
                  activeClassName={styles.activeLink}
                  to={{
                    pathname: `${url}/reviews`,
                    state: { ...location.state, id: movieId },
                  }}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
