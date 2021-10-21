import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';

import HomeView from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={HomeView} exact></Route>
        <Route path="/movies" component={MoviesPage} exact></Route>
        <Route path="/:movieId" component={MovieDetailsPage}></Route>
      </Switch>
    </>
  );
}
