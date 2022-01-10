import React from 'react';
import Like from './like';
import ListGroup from './common/listGroup';
import Pagination from './common/pagination';
import { getMovies } from '../services/fakeMovieService'
import { getGenres } from '../services/fakeGenreService'
import { paginate } from '../utlis/paginate';

class Movies extends React.Component {
    state = {
        movies: [],
        genres: [],
        currentPage: 1,
        pageSize: 4
    };
    componentDidMount() {
        this.setState({
            genres: getGenres(),
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
        console.log(genre);
    }
    render() {
        const {length: count} = this.state.movies // destructuring
        const { currentPage, pageSize, movies: allMovies } = this.state;
        if(count === 0) return <p>There are no movies in the database</p>

        const movies = paginate(allMovies, currentPage, pageSize);

        return (
            <div className='row'>
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                <p>Showing {count} movies</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ttitle</th>
                            <th>Genere</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th>Like</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => (
                            <tr key={movie._id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like
                                        liked={movie.liked}
                                        onClick={() => this.handleLike(movie)}
                                    />
                                    </td>
                                <td>
                                    <button
                                        onClick={() => this.handleDelete(movie)}
                                        className='btn btn-danger btn-sm'
                                        >
                                            Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
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