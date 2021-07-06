const moviesfetcher = (movieName, searchBy) => {
    return async function(dispatch) {
        searchBy = searchBy === undefined ? 'title' : searchBy;
        const moviesList = await fetchMovies(movieName, searchBy);
        dispatch({
            type: 'MOVIES_FETCHER',
            payload: moviesList
        });
    }
}

async function fetchMovies(movieName, searchBy) {
    const URL = "https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&search=" + movieName + "&searchBy=" + searchBy + "&limit=30";
    return (await (await fetch(URL)).json()).data;
}

export default moviesfetcher;
