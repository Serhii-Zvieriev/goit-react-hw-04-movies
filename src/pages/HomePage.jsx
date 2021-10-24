import { useState, useEffect } from "react";
import * as fetchMovie from "../services/themoviedb-api";

import MoviesList from "../components/MoviesList/MoviesList";

export default function TrendingMovie() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchMovie
      .fetchTrendingMovie()
      .then((moviesArr) => setMovies(moviesArr.results));
  }, []);

  return <MoviesList movies={movies} />;
}
