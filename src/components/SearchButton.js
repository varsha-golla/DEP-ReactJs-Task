import { Link } from 'react-router-dom';

function SearchButton(props) {
    return (
        <Link to={`/search/${props.movieName}/${props.searchBy}`}><button className="search-button primary-button first-button">SEARCH</button></Link>
    );
}

export default SearchButton;