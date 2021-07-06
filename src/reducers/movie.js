const movie = (state = {}, action) => {
    console.log("Action triggered " + action.type);
    switch(action.type) {
        case 'MOVIE_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

export default movie;
