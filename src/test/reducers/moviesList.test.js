import moviesList from '../../reducers/moviesList';

test('moviesList has to be an empty array by default', () => {
    const movieList = moviesList([], {});
    expect(movieList).toEqual([]);
});

test('action payload has to be returned when action of type "MOVIES_FETCHER" is dispatched', () => {
    const action = { type: 'MOVIES_FETCHER', payload: [{}, {}] }
    const movieList = moviesList([], action);
    expect(movieList).toEqual(action.payload);
});

test('action payload has to be returned when action of type "SORT_BY_RATING" is dispatched', () => {
    const action = { type: 'SORT_BY_RATING', payload: [{}, {}] }
    const movieList = moviesList([], action);
    expect(movieList).toEqual(action.payload);
});

test('action payload has to be returned when action of type "SORT_BY_RELEASE_DATE" is dispatched', () => {
    const action = { type: 'SORT_BY_RELEASE_DATE', payload: [{}, {}] }
    const movieList = moviesList([], action);
    expect(movieList).toEqual(action.payload);
});