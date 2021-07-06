import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/film/:id">
            <MoviePage />
          </Route>
          <Route path="/search/:movie/:searchBy">
            <SearchPage />
          </Route>
          <Route path="/search/:movie">
            <SearchPage />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
