import React from "react";
import MovieCount from './MovieCount';
import SortMoviesBy from './SortMoviesBy';

const releaseDate = 'release-date';
const rating = 'rating';

class PageMiddle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortByReleaseDate: false,
            sortByRating: true,
            sortBy: rating
        }
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    componentDidMount() {
        this.setState({
            sortByReleaseDate: false,
            sortByRating: true,
            sortBy: rating
        })
    }

    handleSortBy(event) {
        if (event.target.value === releaseDate) {
            this.setState({
                sortByReleaseDate: true,
                sortByRating: false,
                sortBy: releaseDate
            });
        } else if (event.target.value === rating) {
            this.setState({
                sortByReleaseDate: false,
                sortByRating: true,
                sortBy: rating
            });
        }
    }

    render() {
        return (
            <div className="page-middle">
                <MovieCount />
                <SortMoviesBy clickHandler={this.handleSortBy} parentState={this.state}/>
            </div>
        );
    }
}

export default PageMiddle;
