import displaySelectedMovie from '../../actions/displaySelectedMovie';

test('should return an action object with type being "MOVIE_DETAILS" and payload should contain the details of selected movie', () => {
    const movie = {
        id: 1
    };
    const moviesList = [
        {
            id: 1
        },
        {
            id: 2
        }
    ]
    const movieId = 1;
    const obj = displaySelectedMovie(moviesList, movieId)
    expect(obj).toEqual({ type: 'MOVIE_DETAILS', payload: movie});
});