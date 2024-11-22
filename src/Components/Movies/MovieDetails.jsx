import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieDetails } from '../../Redux/Actions/MovieActions';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { movieDetails, loading, error } = useSelector((state) => state.movies);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            dispatch(fetchMovieDetails(id));
        }
    }, [dispatch, id, navigate, user]);

    if (loading) return <p>Loading movie details...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mt-5">
            {movieDetails && (
                <>
                    <div className="row">
                        <div className="col-md-4">
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                                className="img-fluid"
                                alt={movieDetails.title}
                            />
                        </div>
                        <div className="col-md-8">
                            <h2>{movieDetails.title}</h2>
                            <p>{movieDetails.overview}</p>
                            <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
                            <p><strong>Genres:</strong> {movieDetails.genres.map((g) => g.name).join(', ')}</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default MovieDetails;