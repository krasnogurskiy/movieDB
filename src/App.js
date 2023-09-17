import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {
    GenrePage,
    HomePage,
    MovieDetailsPage,
    MovieGenrePage, SearchedMoviePage,
} from "./pages";
import React from "react";



function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'genres'} element={<GenrePage/>}/>
                    <Route path={'genre/:genre_id/:genre_name'} element={<MovieGenrePage/>}/>
                    <Route path={'/movie/:movie_id'} element={<MovieDetailsPage/>}/>
                    {/*//<Route path={'popular'} element={<PopularMoviePAge/>}/>*/}
                    <Route path={'search'} element={<SearchedMoviePage/>}/>
                    {/*<Route path={'about'} element={<AboutPage/>}/>*/}
                    {/*<Route path={'login'} element={<LoginPage/>}/>*/}
                </Route>
            </Routes>
        </div>

    );
}

export default App;