import page from '../../reducers/page';

test('default page should be home page', () => {
    const pageName = page('home-page', {});
    expect(pageName).toBe('home-page');
});

test('page value should be set to "home_page" when action of type "HOME_PAGE" is dispatched', () => {
    const pageName = page('home-page', { type: 'HOME_PAGE' });
    expect(pageName).toBe('home-page');
});

test('page value should be set to "movie_page" when action of type "MOVIE_PAGE" is dispatched', () => {
    const pageName = page('home-page', { type: 'MOVIE_PAGE' });
    expect(pageName).toBe('movie-page');
});