const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'cea59e02d863b0832fb8683083ae6a7a';

//api.themoviedb.org/3/trending/all/day?api_key=cea59e02d863b0832fb8683083ae6a7a
//api.themoviedb.org/3/movie/617653?api_key=cea59e02d863b0832fb8683083ae6a7a&language=en-US
//api.themoviedb.org/3/search/keyword?api_key=cea59e02d863b0832fb8683083ae6a7a&page=1
export async function fetchTrending() {
  const res = await fetch(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
  return await res.json();
}

export async function fetcnOnSearch(searchQuery) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
  return await res.json();
}
export async function fetchMovieDetail(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  return await res.json();
}
export async function fetchMovieCredits(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
  return await res.json();
}
export async function fetchMovieReviews(movieId) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
  return await res.json();
}
