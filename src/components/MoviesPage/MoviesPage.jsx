import { useState, useEffect } from 'react';

import * as api from '../../services/ApiService';
import Searchbar from '../Searchbar/Searchbar';
import FilmList from '../FilmList/FilmList';
import { useLocation, useHistory } from 'react-router-dom';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const getSearchQuery = query => {
    setSearchQuery(query);
  };

  const fromUrlQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    fromUrlQuery && setSearchQuery(fromUrlQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchQuery === null) {
      return;
    }
    api.fetcnOnSearch(searchQuery).then(res => {
      setMovies(res.results);
      history.push({ ...location, search: `query=${searchQuery}` });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      <Searchbar getSearchQuery={getSearchQuery} />
      <div>{fromUrlQuery && <FilmList movies={movies} location={location} />}</div>
    </>
  );
}
