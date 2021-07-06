const page = (state = 'home-page', action) => {
    switch(action.type) {
        case 'HOME_PAGE':
            return 'home-page';
        case 'MOVIE_PAGE':
            return 'movie-page'
        default:
            return state;
    }
}

export default page;
