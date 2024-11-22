export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_LOADING = 'AUTH_LOADING';

export const loginUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOADING }); // Set loading state
        // Simulate login API call
        const response = { token: 'mock-token', user: userData };
        localStorage.setItem('token', response.token);
        dispatch({ type: LOGIN_SUCCESS, payload: response.user });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'Login failed.' });
    }
};

export const signupUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOADING }); // Set loading state
        // Simulate signup API call
        const response = { token: 'mock-token', user: userData };
        localStorage.setItem('token', response.token);
        dispatch({ type: SIGNUP_SUCCESS, payload: response.user });
    } catch (error) {
        dispatch({ type: AUTH_ERROR, payload: 'Signup failed.' });
    }
};