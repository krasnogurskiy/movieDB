// import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";
// import {useTheme} from "../hooks/useTheme";
// import {movieService} from "../services/movieService";
// import {Pagination} from "../components/pagination/Pagination";
// import {MoviesListCard} from "../components/MovieListCard/MovieListCard";
//
// const NewMovieListPage = () => {
//     let {page} = useParams()
//     const {theme, setTheme} = useTheme();
//     const [movies, setMovie] = useState([]);
//
//
//
//
//     useEffect(()=> {
//         movieService.getNext(page).then(({data}) => setMovie(data.results))
//     },[page])
//     return (
//         <div>
//             {movies.map(card => <MoviesListCard key={card.id} card={card}/>)}
//             <Pagination/>
//         </div>
//     );
// };
//
// export {NewMovieListPage};
