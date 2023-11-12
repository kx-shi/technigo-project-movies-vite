
// Component with button that links back to home page
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/HomeButton.css';

export const HomeButton = ({props}) => {
    return(
        <Link to="/">Back</Link>
    )
}