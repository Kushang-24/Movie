import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../../Redux/Actions/MovieActions';

const MovieList = () => {
    const dispatch = useDispatch();
    const { movies, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchPopularMovies());
    }, [dispatch]);

    if (loading) return <p>Loading movies...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-4">
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-3 mb-4" key={movie.id}>
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

export default MovieList;