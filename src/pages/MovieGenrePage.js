import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import css from ".././components/MovieList/MovieList.module.css"
import {useTheme} from "../hooks/useTheme";
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../redux";
import {movieService} from "../services/MovieService";
import {MoviesListCard} from "../components/MovieListCard/MovieListCard";


const MovieGenrePage = () => {
    const {genre_id, genre_name} = useParams()
    const dispatch = useDispatch()
    const [movies, setMovie] = useState([]);
    const [lastPage, setLastPage] = useState(null);
    const {currentPage} = useSelector(state => state.movies);

    const {theme, setTheme} = useTheme();

    useEffect(() => {
        movieService.getByGenre(genre_id, currentPage).then(({data}) => setMovie(data.results))
    }, [genre_id, currentPage])

    useEffect(() => {
        movieService.getByGenre(genre_id).then(({data}) => setLastPage(data.total_pages))
    }, [genre_id])

    return (
        <div className={css.Wrap}>
            <div className={css.title_genre}>
                <h2>{genre_name} films</h2>
            </div>
            {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
            <div className={'buttons_pagination'}>
                <button  disabled={currentPage === 1} onClick={() =>
                    dispatch(movieActions.setCurrentPage(currentPage - 1 ))
                }>prev</button>
                <button  disabled={currentPage === lastPage} onClick={() => dispatch(movieActions.setCurrentPage(currentPage + 1 ))}>next</button>
            </div>

        </div>
    );
};

export {MovieGenrePage};
