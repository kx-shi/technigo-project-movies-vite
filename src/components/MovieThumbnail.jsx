// Klara - styling for this component
// Component for showing movie thumbnail (image, title, release date)
import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieThumbnail = ({ props }) => {
  return (
    <>
      {props.map((movieItem) => {
        return (
          <Link key={movieItem.id} to={`/movieDetails/${movieItem.id}`}>
            <img
              src={`http://image.tmdb.org/t/p/w300/${movieItem.poster_path}`}
              alt="movie poster"
            />
            <p>{movieItem.title}</p>
          </Link>
        );
      })}
    </>
  );
};
