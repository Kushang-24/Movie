import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import movieReducer from './Reducers/MovieReducer';
import authReducer from './Reducers/AuthReducer';

const store = configureStore({
  reducer: {
    movies: movieReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
