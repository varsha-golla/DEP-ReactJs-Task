import {useDispatch, useSelector} from 'react-redux';
import sortByReleaseDate from '../actions/sortByReleaseDate';

function ReleaseDateButton(props) {
    const isSortByReleaseDate = props.sortByReleaseDate;
    const { clickHandler } = props;
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.moviesList);
    const releaseDate = 'release-date';

    return (
        <button className={`${isSortByReleaseDate ? "primary-button" : "secondary-button"} first-button`} value={releaseDate} onClick={(event) => {clickHandler(event);dispatch(sortByReleaseDate(moviesList))}}>RELEASE DATE</button>
    );
}

export default ReleaseDateButton;
