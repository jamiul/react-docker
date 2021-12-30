import React from 'react';
import { getMovies } from '../services/fakeMovieService'

class Movies extends React.Component {
    state = {
        movies: getMovies()
    };
    // delete the movie
    handleDelete = movie => {
        console.log(movie);
        const movies  = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }
    render() {
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
            </React.Fragment>
        );
    }
}

export default Movies;