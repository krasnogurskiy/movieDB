import React from 'react';
import {useTheme} from "../hooks/useTheme";
import css from "../components/Header/Header.module.css"
import {Genres} from "../components/Genres/Genres";

const GenrePage = () => {
    const {theme, setTheme} = useTheme();

    return (
        <div className={css.genres}>
            <Genres/>
        </div>
    );
};

export {GenrePage};