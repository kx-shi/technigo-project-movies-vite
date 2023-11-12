// Component for showing movie thumbnail (image, title, release date)
import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/MovieThumbnail.css';

export const MovieThumbnail = ({ props }) => {
  return (
    <>
      {props.map((movieItem) => {
        return (
          <div className="movie-thumbnail-container">
          <Link key={movieItem.id} to={`/movieDetails/${movieItem.id}`}>
            <img className="img"
              src={`http://image.tmdb.org/t/p/w300/${movieItem.poster_path}`}
              alt="movie poster"
            />
            <div className="movie-title">
            <p className="movie-title-p">{movieItem.title}</p>
            </div>
          </Link>
          </div>
        );
      })}
    </>
  );
};
