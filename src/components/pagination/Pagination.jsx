import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {movieActions} from "../../redux";


const Pagination = ({  }) => {
    const {movies, currentPage} = useSelector(state => state.movies);
    const dispatch = useDispatch()
    return (
        <div>
            <div style={{width: "100vw"}}>
                <button onClick={() => dispatch(movieActions.setCurrentPage(currentPage - 1 ))}>prev</button>
                <button onClick={() => dispatch(movieActions.setCurrentPage(currentPage + 1 ))}>next</button>
            </div>
        </div>
    );
};

export {Pagination};