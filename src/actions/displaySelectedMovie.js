import getMovieById from './getMovieById';

const displaySelectedMovie = (moviesList, movieId) => {
    const movie = getMovieById(moviesList, movieId);
    return {
        type: 'MOVIE_DETAILS',
        payload: movie
    }
}

export default displaySelectedMovie;
