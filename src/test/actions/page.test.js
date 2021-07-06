import { homePage, moviePage } from '../../actions/page';

test('homePage action returns object with type "HOME_PAGE"', () => {
    const obj = homePage();
    expect(obj).toEqual({ type: 'HOME_PAGE' });
});

test('moviePage action returns object with type "MOVIE_PAGE"', () => {
    const obj = moviePage();
    expect(obj).toEqual({ type: 'MOVIE_PAGE' });
});