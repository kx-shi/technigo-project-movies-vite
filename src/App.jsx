// Hanna - Implement routing for movies

import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import  { MovieDetails } from './components/MovieDetails';
import  { MovieThumbnail } from './components/MovieThumbnail';
import Loading from './components/Loading';

export const App = () => {
  const API_KEY = "";
  const [movieList, setmovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Initial fetch from API and update state
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  // Fetch initial movies through API
  const fetchMovies = () => {
    setLoading(true)
    
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setmovieList(data.results))
    .finally(()=>   setLoading(false))

    //Optional code to simulate delay
    /*setTimeout(()=>
    fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => setmovieList(data.results))
    .finally(()=>   setLoading(false)), 1000*/
  };
  
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={loading ? <Loading/>: <MovieThumbnail props={movieList}/>}/>
      <Route path="/movieDetails/:movieId" element={<MovieDetails />}/> 
    </Routes>
    </BrowserRouter>
  )
};
