import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../Redux/Actions/MovieActions';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { movieDetails, loading, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    if (loading) return <p>Loading movie details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            {movieDetails && (
                <>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.overview}</p>
                    <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                    <p><strong>Genres:</strong> {movieDetails.genres.map((g) => g.name).join(', ')}</p>
                </>
            )}
        </div>
    );
};

export default MovieDetails;