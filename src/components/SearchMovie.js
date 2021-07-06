import React from 'react';
import AppTitle from './AppTitle';
import SearchButton from './SearchButton';

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            searchByTitle: true,
            searchByGenres: false,
            searchBy: 'title'
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSearchBy = this.handleSearchBy.bind(this);
    }

    componentDidMount() {
        this.setState({
            movieName: '',
            searchByTitle: true,
            searchByGenres: false,
            searchBy: 'title'
        });
    }

    handleSearch(event) {
        this.setState({
            movieName: event.target.value
        });
    }

    handleSearchBy(event) {
        if (event.target.value == 'title') {
            this.setState({
                searchByTitle: true,
                searchByGenres: false,
                searchBy: 'title'
            });
        } else if (event.target.value == 'genres') {
            this.setState({
                searchByTitle: false,
                searchByGenres: true,
                searchBy: 'genres'
            });
        }
    }

    render() {
        const { searchByTitle } = this.state;
        const { searchByGenres } = this.state;
        return (
            <>
                <div className="bg-image search-movie-bg"></div>
                <div className="page-top-search-movie stack-top">
                    <header className="header">
                        <AppTitle/>
                    </header>
                    <div className="centered-container">
                        <p className="big-font">FIND YOUR MOVIE</p>
                        <div>
                            <input className="search-bar" type="text" placeholder="Search" onChange={this.handleSearch}></input>
                            <SearchButton movieName={this.state.movieName} searchBy={this.state.searchBy} />
                        </div>
                        <div>
                            SEARCH BY
                            <button className={`${searchByTitle ? "primary-button" : "secondary-button"} first-button`} value="title" onClick={this.handleSearchBy}>TITLE</button>
                            <button className={`${searchByGenres ? "primary-button" : "secondary-button"}`} value="genres" onClick={this.handleSearchBy}>GENRE</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



export default SearchMovie;
