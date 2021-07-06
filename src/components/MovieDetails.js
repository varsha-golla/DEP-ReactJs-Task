import AppTitle from './AppTitle';
import { homePage } from '../actions/page';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function MovieDetails() {
    const dispatch = useDispatch();
    let movie = useSelector(state => state.movie);
    return (
        <>
            <div className="bg-image movie-page-bg"></div>
            <div className="page-top-movie-page stack-top">
                <header className="header">
                    <AppTitle/>
                    <Link to="/"><p className="inline-element search-icon" onClick={() => {dispatch(homePage())}}><i className="fas fa-search fa-rotate-90"></i></p></Link>
                </header>
                <div className="centered-flex">
                    <div>
                        <img src={movie.poster_path} className="movie-poster"/>
                    </div>
                    <div className="movie-data">
                        <div className="margin">
                            <p className="movie-title inline-element big-font">{movie.title}</p>
                            <p className="movie-rating inline-element">{movie.vote_average}</p>
                        </div>
                        <p className="movie-release-date inline-element">{movie.release_date.slice(0, 4)}</p>
                        <p className="movie-duration inline-element">{movie.runtime || 150} min</p>
                        <p className="movie-description">{movie.overview}</p>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default MovieDetails;