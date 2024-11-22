import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../../Redux/Actions/MovieActions';

const MovieSearch = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchMovies(query));
    };

    return (
        <div className="container mt-5">
            <h2>Search Movies</h2>
            <form onSubmit={handleSearch}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search for a movie..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            {loading && <p>Loading search results...</p>}
            {error && <p>{error}</p>}
            <div className="row mt-3">
                {movies && movies.map((movie) => (
                    <div className="col-md-3" key={movie.id}>
                        <div className="card">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                className="card-img-top"
                                alt={movie.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <p className="card-text">{movie.release_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieSearch;
