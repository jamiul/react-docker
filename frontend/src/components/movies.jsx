import React from 'react';
import MoviesTable from './moviesTable';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utlis/paginate';
import _ from "lodash"

class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4,
        sortColumn: { path: 'title', order: 'asc' }
    };
    componentDidMount() {
        const genres = [{_id: '', name: 'All Genres'}, ...getGenres()];
        this.setState({
            genres,
            movies: getMovies()
        })
    }
    // delete the movie
    handleDelete = movie => {
        console.log(movie);
        const movies  = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }
    // handle like
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movies[index] };
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }
    // handle page change
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }
    // handle genre select
    handleGenreSelect = (genre) => {
        this.setState({ selectedGenre: genre, currentPage: 1 });
    }
    // handle sort
    handleSort = sortColumn => {
        this.setState({ sortColumn });
    }
    render() {
        const {length: count} = this.state.movies // destructuring
        const {
            currentPage,
            pageSize,
            sortColumn,
            selectedGenre,
            movies: allMovies
        } = this.state;

        if(count === 0) return <p>There are no movies in the database</p>
        const filtered =
                    selectedGenre && selectedGenre._id ?
                    allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])

        const movies = paginate(sorted, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                <p>Showing {filtered.length} movies</p>
                <MoviesTable
                    movies={movies}
                    sortColumn={sortColumn}
                    onDelete={this.handleDelete}
                    onLike={this.handleLike}
                    onSort={this.handleSort}
                />
                <Pagination
                    itemsCount={filtered.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
                </div>
            </div>
        );
    }
}

export default Movies;