import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";

import * as fetchMovie from "../services/themoviedb-api";

export default function TrendingMovie() {
  const { url } = useRouteMatch();
  // const a = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovie
      .fetchTrendingMovie()
      .then((moviesArr) => setMovies(moviesArr.results));
  }, []);

  // console.log(url);

  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              {/* <Link to={`${url}/${id}`}>{title}</Link> */}
              <Link to={`movie/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
