import { lazy, Suspense } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Spinner from './components/Spinner/Spinner';
// import HomeView from './components/HomePage/HomePage';
// import MoviesPage from './components/MoviesPage/MoviesPage';
// import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
const AsyncMoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage'));
const AsyncHomeView = lazy(() => import('./components/HomePage/HomePage'));
const AsyncMovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage'));

export default function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" component={AsyncHomeView} exact></Route>
          <Route path="/movies" component={AsyncMoviesPage} exact></Route>
          <Route path="/:movieId" component={AsyncMovieDetailsPage}></Route>
        </Switch>
      </Suspense>
    </>
  );
}
