import MovieCard from './Moviecard';
import NoFilmsFound from './NoFillmsFound';
import moviesfetcher from '../actions/fetchMovies';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';

function Movies() {
  const moviesList = useSelector(state => state.moviesList);
  const movies = moviesList.map(movie => {
    return <MovieCard movie={movie} key={movie.id} />
  });

  return (
    <div className="page-bottom">
      { moviesList.length === 0 ? <NoFilmsFound /> :
        <div className="movies-grid-container">
          {movies}
        </div>
      }
    </div>
  );
}

export default Movies;
