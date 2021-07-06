import {useSelector} from 'react-redux';

function MovieCount() {
    const movieCount  = useSelector(state => state.moviesList.length);
    const page = useSelector(state => state.page);
    const movie = useSelector(state => state.movie);
    let text; 
    if(page === 'home-page') {
        text = movieCount > 0 ? `${movieCount} movies found` : ``;
    } else {
        text = `Films by ${movie.genres[0]} genre`;
    }
    
    return (
        <p className="bold-text">{text}</p>
    );
}

export default MovieCount;
