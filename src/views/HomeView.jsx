import * as api from '../services/ApiService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrending().then(setMovies);
  }, []);

  return (
    <ul>
      {movies &&
        movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={`/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}
