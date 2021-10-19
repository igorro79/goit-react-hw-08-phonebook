import * as api from '../services/ApiService';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom';
import MovieCastView from './MovieCastView';
import MovieReviewsView from './MovieReviewsView';

export default function MovieInfoView() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();
  console.log(movie);
  useEffect(() => {
    api.fetchMovieDetail(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <h3>{movie ? movie.title : 'unknown'} </h3>
          <h3>User score: </h3>
          <p>{movie.vote_average * 10 || 'unknown'}%</p>
          <h3>Overview: </h3>
          <p>{movie.overview || 'unknown'}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(i => i.name).join(' ')}</p>
          <Link to={`/${movieId}/cast`} style={{ display: 'block' }}>
            Cast
          </Link>
          <Link to={`/${movieId}/reviews`}>Reviews</Link>
        </div>
      )}
      <Switch>
        {/* <Route path="/:movieId/:cast" exact component={MovieCastView}></Route> */}
        <Route path="/:movieId/:reviews" exact component={MovieReviewsView}></Route>
      </Switch>
    </>
  );
}
