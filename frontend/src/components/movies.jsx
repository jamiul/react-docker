import React from 'react';
import { getMovies } from '../services/fakeMovieService'
import Like from './like';
import Pagination from './common/pagination';

class Movies extends React.Component {
    state = {
        movies: getMovies(),
        pageSize: 4
    };
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
    handlePageChange = () => {
        console.log(`page`);
    }
    render() {
        console.log(this.state.movies);
        const {length: count} = this.state.movies // destructuring
        if(count === 0) return <p>There are no movies in the database</p>
        return (
            <React.Fragment>
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
                        {this.state.movies.map(movie => (
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
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        );
    }
}

export default Movies;