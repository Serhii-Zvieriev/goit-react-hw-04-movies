import { useState, useEffect } from "react";

import * as fetchMovie from "../../services/themoviedb-api";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchMovie.getMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul>
            {cast.cast.map(({ id, character, name, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={100}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
