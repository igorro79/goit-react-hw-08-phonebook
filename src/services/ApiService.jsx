const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cea59e02d863b0832fb8683083ae6a7a';

//api.themoviedb.org/3/trending/all/day?api_key=cea59e02d863b0832fb8683083ae6a7a
//api.themoviedb.org/3/movie/617653?api_key=cea59e02d863b0832fb8683083ae6a7a&language=en-US

export function fetchTrending() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`).then(res => res.json());
}

export function fetcnOnSearch(searchQuery, page = 1) {
  return fetch(`${BASE_URL}/search/${searchQuery}?api_key=${API_KEY}&page=${page}`).then(res =>
    res.json(),
  );
}
export function fetchMovieDetail(movieId) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res =>
    res.json(),
  );
}
export function fetchMovieCredits(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}?api_key=${API_KEY}&language=en-US`).then(res =>
    res.json(),
  );
}
export function fetchMovieReviews(movieId) {
  return fetch(`${BASE_URL}/movies/${movieId}?api_key=${API_KEY}&language=en-US`).then(res =>
    res.json(),
  );
}
