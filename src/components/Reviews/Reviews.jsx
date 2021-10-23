import { useState, useEffect } from "react";

import * as fetchMovie from "../../services/themoviedb-api";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && reviews.total_results !== 0 ? (
        <ul>
          {reviews.results.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
}
