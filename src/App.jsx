import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MovieList from './Components/Movies/MovieList';
import MovieDetails from './Components/Movies/MovieDetails';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import PrivateRoute from './Components/Auth/PrivateRoute';
import Profile from './Components/Auth/Profile'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;