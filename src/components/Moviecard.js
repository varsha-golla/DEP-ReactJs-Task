import { useDispatch, useSelector } from 'react-redux';
import { moviePage } from '../actions/page';
import displaySelectedMovie from '../actions/displaySelectedMovie';
import getMovieById from '../actions/getMovieById';
import fetchMovies from '../actions/fetchMovies';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.moviesList);
    return (
        <Link to={`/film/${props.movie.id}`}>
            <div className="card" >
                <img className="card-movie-poster" id={props.movie.id} src={props.movie.poster_path} 
                onClick={(event) => {
                    const movieId=parseInt(event.target.id);
                    const movie = getMovieById(moviesList, movieId);
                    dispatch(moviePage());
                    dispatch(displaySelectedMovie(moviesList, movieId));
                    dispatch(fetchMovies(movie.genres[0], 'genres'))}}>
                </img>
                <p className="card-movie-title inline-element">{props.movie.title}</p>
                <p className="card-release-year">{props.movie.release_date.slice(0, 4)}</p>
                <p className="card-genre">{props.movie.genres.join(' & ')}</p>
            </div>
        </Link>
    );
}

export default MovieCard;
