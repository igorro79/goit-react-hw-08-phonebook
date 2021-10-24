import { useState, useEffect } from 'react';

import * as api from '../../services/ApiService';
import Searchbar from '../Searchbar/Searchbar';
import FilmList from '../FilmList/FilmList';
import { useLocation } from 'react-router-dom';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  const getSearchQuery = query => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    api.fetcnOnSearch(searchQuery).then(res => setMovies(res.results));
  }, [searchQuery]);

  return (
    <>
      <Searchbar getSearchQuery={getSearchQuery} />
      <div>{movies && <FilmList movies={movies} location={location} />}</div>
    </>
  );
}
