import React from 'react';

//import {MoviesList} from "../components";
import css from '../components/MovieListCard/MovieListCard.module.css'
import {MoviesList} from "../components/MovieList/MovieList";

const HomePage = () => {
    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export {HomePage};