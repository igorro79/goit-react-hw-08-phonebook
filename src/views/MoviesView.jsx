import * as api from '../services/ApiService';
// import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import Searchbar from '../components/Searchbar/Searchbar';
export default function MoviesView() {
  // const [movies, setMovies] = useState(null);
  // const match = useRouteMatch();

  // useEffect(() => {
  //   api.fetchTrending().then(setMovies);
  // }, []);

  // const { results } = movies;
  return (
    <>
      <Searchbar />;<h2>hi films</h2>;
    </>
  );
}
