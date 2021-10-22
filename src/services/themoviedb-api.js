const API_KEY = "a2e02600e12e2473b75eeef15976f1a3";
const BASE_URL = `https://api.themoviedb.org/3`;

async function fetchWithThemoviedb(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovie() {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return fetchWithThemoviedb(url);
}

export function fetchSearchMovie(searchMovie) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchMovie}`;
  return fetchWithThemoviedb(url);
}

export function getMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
  return fetchWithThemoviedb(url);
}

export function getMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;
  return fetchWithThemoviedb(url);
}

export function getMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`;
  return fetchWithThemoviedb(url);
}
