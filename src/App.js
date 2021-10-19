// import { useState, useEffect } from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

// import Searchbar from './components/Searchbar/Searchbar';
import Navigation from './components/Navigation/Navigation';
// import * as api from './services/ApiService';
import HomeView from './views/HomeView';
import MoviesView from './views/MoviesView';
import MovieInfoView from './views/MovieInfoView';

export default function App() {
  // const [showSpinner, setShowSpinner] = useState(false);
  // const [searchQuery, setSearchQuery] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" component={HomeView} exact></Route>
        <Route path="/movies" component={MoviesView} exact></Route>
        <Route path="/:movieId" component={MovieInfoView} exact></Route>
      </Switch>
    </>
  );
}
