import sortByRating from '../../actions/sortByRating';

test('should sort the movies list in descending order based on rating', () => {
    const moviesList = [
        {
            "vote_average": 6
        },
        {
            "vote_average": 3
        },
        {
            "vote_average": 8
        },
        {
            "vote_average": 5
        }
    ];
    const sortedList = [
        {
            "vote_average": 8
        },
        {
            "vote_average": 6
        },
        {
            "vote_average": 5
        },
        {
            "vote_average": 3
        }
    ];

    var obj = sortByRating(moviesList);
    expect(obj.type).toBe('SORT_BY_RATING');
    expect(obj.payload).toEqual(sortedList);
});