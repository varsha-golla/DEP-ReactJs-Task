const sortByReleaseDate = (moviesList) => {
    const sortedMoviesList = sortListByReleaseDate(moviesList);
    return {
        type: 'SORT_BY_RELEASE_DATE',
        payload: sortedMoviesList
    }
}

function sortListByReleaseDate(moviesList) {
    moviesList.sort((a, b) => {
        return parseInt(b['release_date'].slice(0, 4)) - parseInt(a['release_date'].slice(0, 4));
    });
    return [].concat(moviesList);
}

export default sortByReleaseDate;
