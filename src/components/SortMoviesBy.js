import ReleaseDateButton from './ReleaseDateButton';
import RatingButton from './RatingButton';

function SortMoviesBy(props) {
    return (
        <p className="light-text">
            SORT BY 
            <ReleaseDateButton sortByReleaseDate={props.parentState.sortByReleaseDate} clickHandler={props.clickHandler}/>
            <RatingButton sortByRating={props.parentState.sortByRating} clickHandler={props.clickHandler}/>
        </p>
    );
}

export default SortMoviesBy;
