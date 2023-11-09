// Hanna - Implement routing for movies

import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API_KEY } from '../API';
import  { MovieDetails } from './components/MovieDetails';
import  { MovieThumbnail } from './components/MovieThumbnail';

export const App = () => {
  const [movieList, setmovieList] = useState([]);

  // Initial fetch from API and update state
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  // Fetch initial thoughts through API
  const fetchMovies = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setmovieList(data));
    //setLoading(false); TODO: Add loading screen
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movieList)

  return (
    <BrowserRouter>
     { // map over movieList
      // render <MovieThumbnail /> component
      // each <MovieThumbnail /> component links to a <MovieDetails /> component
     }
    </BrowserRouter>
  )
};
