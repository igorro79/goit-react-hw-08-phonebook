import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';

import FilmList from '../FilmList/FilmList';
import Container from '../Container/Container';

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrending().then(res => setMovies(res.results));
  }, []);
  // movies && console.log(movies);

  return <Container>{movies && <FilmList movies={movies} />}</Container>;
}
