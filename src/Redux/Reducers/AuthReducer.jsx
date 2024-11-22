import { LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTH_ERROR, AUTH_LOADING } from '../Actions/AuthActions';

const initialState = {
  user: null,
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
    default:
      return state;
  }
};

export default authReducer;