import sortByReleaseDate from '../../actions/sortByReleaseDate';

test('should sort the movies list in descending order based on release date', () => {
    const moviesList = [
        {
            "release_date": "2018-02-07"
        },
        {
            "release_date": "2016-02-11"
        },
        {
            "release_date": "2017-12-13"
        },
        {
            "release_date":"2018-02-07"
        }
    ];
    const sortedList = [
        {
            "release_date": "2018-02-07"
        },
        {
            "release_date": "2018-02-07"
        },
        {
            "release_date": "2017-12-13"
        },
        {
            "release_date": "2016-02-11"
        }
    ];

    var obj = sortByReleaseDate(moviesList);
    expect(obj.type).toBe('SORT_BY_RELEASE_DATE');
    expect(obj.payload).toEqual(sortedList);
});