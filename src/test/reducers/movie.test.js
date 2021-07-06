import movie from '../../reducers/movie';

test('movie should be an empty object by default', () => {
    const movieObj = movie({}, {});
    expect(movieObj).toEqual({});
});

test('action payload has to be returned when action of type "MOVIE_DETAILS" is dispatched', () => {
    const action = { type: 'MOVIE_DETAILS', payload: {} }
    const movieObj = movie({}, action);
    expect(movieObj).toEqual(action.payload);
});
