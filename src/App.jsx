import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MovieList from './Components/Movies/MovieList';
import MovieDetails from './Components/Movies/MovieDetails';
import MovieSearch from './Components/Movies/MovieSearch';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import PrivateRoute from './Components/Auth/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<PrivateRoute>Profile Component</PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
