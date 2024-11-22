import axios from 'axios';
import { API_KEY, API_BASE_URL } from '../../Api';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE_DETAILS = 'FETCH_MOVIE_DETAILS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/popular?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Failed to fetch movies' });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await axios.get(`${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    dispatch({ type: FETCH_MOVIE_DETAILS, payload: response.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Failed to fetch movie details' });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};

export const searchMovies = (query) => async (dispatch) => {
  dispatch({ type: 'MOVIES_SEARCH_REQUEST' });
  try {
    const response = await axios.get(`${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    dispatch({ type: FETCH_MOVIES, payload: response.data.results });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: 'Failed to search movies' });
  } finally {
    dispatch({ type: SET_LOADING, payload: false });
  }
};
