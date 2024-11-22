import { LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR, AUTH_LOADING, LOGOUT } from '../Actions/AuthActions';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token'),
  error: null,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, user: action.payload, token: localStorage.getItem('token'), error: null, loading: false };
    case AUTH_ERROR:
      return { ...state, user: null, token: null, error: action.payload, loading: false };
    case LOGOUT:
      return { ...state, user: null, token: null, error: null, loading: false };
    default:
      return state;
  }
};

export default authReducer;