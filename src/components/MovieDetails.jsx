// Karolina - Styling and implementation of this component
// Component for showing movie details such as title, description, rating...
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { HomeButton } from "./HomeButton";
import { RatingComponent } from "./RatingComponent";
import { useParams } from "react-router-dom";

export const MovieDetails = ({ props }) => {
  const API_KEY = "";
  const { movieId } = useParams();
  const [details, setDetails] = useState([]);

  // Fetch initial movies through API
  const fetchMoviesDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));
  };

  useEffect(() => {
    fetchMoviesDetails();
  }, [movieId]);

  return (
    <>
      <img
        src={`https://image.tmdb.org/t/p/w342${details.poster_path}`}
        alt="movie details"
      />
    </>
  );
};
