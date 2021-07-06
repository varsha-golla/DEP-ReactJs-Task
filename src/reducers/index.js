import moviesList from './moviesList';
import page from './page';
import movie from './movie';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    moviesList: moviesList,
    page: page,
    movie: movie
});

export default allReducers;