import { useRouteMatch, Route, useParams } from "react-router-dom";

import MovieDetails from "../components/MovieDetails/MovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Reviews";

export default function MovieDetailsPage() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  return (
    <>
      <MovieDetails movieId={movieId} />

      <Route path={`${url}/cast`} exact>
        <Cast movieId={movieId} />
      </Route>
      <Route path={`${url}/reviews`} exact>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
