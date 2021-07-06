function getMovieById(moviesList, movieId) {
    for (let movie of moviesList) {
        if (movie.id === movieId) {
            return movie;
        }
    }
    return {};
}

export default getMovieById;
