import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FilmList from '../FilmList/FilmList';
import Container from '../Container/Container';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  sessionStorage.setItem('movies', null);
  useEffect(() => {
    api.fetchTrending().then(res => setMovies(res.results));
  }, []);

  return <Container>{movies && <FilmList movies={movies} location={location} />}</Container>;
}
