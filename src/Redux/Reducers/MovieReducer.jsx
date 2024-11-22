import { FETCH_MOVIES, FETCH_MOVIE_DETAILS, SET_LOADING, SET_ERROR } from '../Actions/MovieActions';

const initialState = {
  movies: [],
  movieDetails: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_MOVIE_DETAILS:
      return { ...state, movieDetails: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case 'MOVIES_SEARCH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'MOVIES_SEARCH_SUCCESS':
      return { ...state, loading: false, movies: action.payload };
    case 'MOVIES_SEARCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
