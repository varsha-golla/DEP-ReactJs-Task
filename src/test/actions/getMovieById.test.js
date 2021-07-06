import getMovieById from '../../actions/getMovieById';

test('movie with given Id should be returned from the movies list', () => {
    const moviesList = [
        {
            id: 1
        },
        {
            id: 2
        }
    ]
    const movieId = 1;
    const obj = getMovieById(moviesList, movieId);
    expect(obj).toEqual({ id: 1 });
});

test('empty object has to be returned when movies list does not contain the given id', () => {
    const moviesList = [
        {
            id: 1
        },
        {
            id: 2
        }
    ]
    const movieId = 3;
    const obj = getMovieById(moviesList, movieId);
    expect(obj).toEqual({});
});
