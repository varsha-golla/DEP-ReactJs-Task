import {useDispatch, useSelector} from 'react-redux';
import sortByRating from '../actions/sortByRating';

function RatingButton(props) {
    const isSortByRating = props.sortByRating;
    const { clickHandler } = props;
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.moviesList);
    const rating = 'rating';

    return (
        <button className={`${isSortByRating ? "primary-button" : "secondary-button"}`} value={rating} onClick={(event) => {clickHandler(event);dispatch(sortByRating(moviesList))}}>RATING</button>
    );
}

export default RatingButton;
