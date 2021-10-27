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
    api.fetcnOnSearch(searchQuery).then(res => {
      setMovies(res.results);
      sessionStorage.setItem('movies', JSON.stringify(res.results));
    });
  }, [searchQuery]);

  return (
    <>
      <Searchbar getSearchQuery={getSearchQuery} />
      <div>
        {JSON.parse(sessionStorage.getItem('movies')) ? (
          <FilmList movies={JSON.parse(sessionStorage.getItem('movies'))} location={location} />
        ) : (
          <FilmList movies={movies} location={location} />
        )}
      </div>
    </>
  );
}
