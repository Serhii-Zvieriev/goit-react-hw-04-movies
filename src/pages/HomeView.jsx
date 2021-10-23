import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as fetchMovie from "../services/themoviedb-api";

export default function TrendingMovie() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovie
      .fetchTrendingMovie()
      .then((moviesArr) => setMovies(moviesArr.results));
  }, []);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movie/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
