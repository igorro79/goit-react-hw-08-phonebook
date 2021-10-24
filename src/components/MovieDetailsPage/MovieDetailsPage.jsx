import * as api from '../../services/ApiService';
import { useState, useEffect } from 'react';
import { Switch, Route, Link, useParams, useHistory, useLocation } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import noImage from '../../images/No_image.png';
import Container from '../../components/Container/Container';
import s from './MovieDetailsPage.module.css';

export default function MovieInfoView() {
  const [movie, setMovie] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const IMG_URL = 'https://image.tmdb.org/t/p/w300';

  const { movieId } = useParams();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    api.fetchMovieDetail(movieId).then(setMovie);
  }, [movieId]);

  useEffect(() => {
    setPrevPage(location?.state?.from || '/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onGoBack = e => {
    history.push(prevPage);
  };

  return (
    <Container>
      {movie && (
        <>
          {' '}
          <button type="button" className={s.goBackBtn} onClick={onGoBack}>
            Go back
          </button>
          <div className={s.wrapper}>
            <img src={`${IMG_URL}/${movie.poster_path}` || { noImage }} alt="film poster" />
            <div
              style={{
                marginLeft: '20px',
              }}
            >
              <h3>{movie ? movie.title : 'unknown'} </h3>
              <h3>User score: </h3>
              <p>{movie.vote_average ? `${movie.vote_average * 10}%` : 'no rating'} </p>
              <h3>Overview: </h3>
              <p>{movie.overview || 'unknown'}</p>
              <h3>Genres</h3>
              <p>{movie.genres ? movie.genres.map(i => i.name).join(' ') : 'unknown genre'}</p>
              <Link to={`/${movieId}/credits`} className={s.link}>
                Cast
              </Link>
              <Link to={`/${movieId}/reviews`}>Reviews</Link>
            </div>
          </div>
        </>
      )}

      <Switch>
        <Route path="/:movieId/credits" exact component={Cast}></Route>
        <Route path="/:movieId/reviews" exact component={Reviews}></Route>
      </Switch>
    </Container>
  );
}
