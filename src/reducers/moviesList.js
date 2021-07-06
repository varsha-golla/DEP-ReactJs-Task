const moviesList = (state = [], action) => {
    switch(action.type) {
        case 'MOVIES_FETCHER':
            return action.payload;
        case 'SORT_BY_RATING':
            return action.payload;
        case 'SORT_BY_RELEASE_DATE':
            return action.payload;
        default:
            return state;
    }
}

export default moviesList;
