import { useParams } from "react-router";
import moviesfetcher from '../actions/fetchMovies';
import { useDispatch } from 'react-redux'
import HomePage from "./HomePage";

function SearchPage() {
    console.log("Hit");
    const { movie, searchBy } = useParams();
    const dispatch = useDispatch();
    dispatch(moviesfetcher(movie, searchBy));
    return <HomePage />
}

export default SearchPage;
