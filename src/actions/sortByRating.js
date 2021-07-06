const sortByRating = (moviesList) => {
    const sortedMoviesList = sortListByRating(moviesList);
    return {
        type: 'SORT_BY_RATING',
        payload: sortedMoviesList
    }
}

function sortListByRating(moviesList) {
    moviesList.sort((a, b) => {
        if(b['vote_average'] > a['vote_average']) {
            return 1;
        } else if(a['vote_average'] > b['vote_average']) {
            return -1;
        } else {
            return 0;
        }
    });
    return [].concat(moviesList);
}

export default sortByRating;
