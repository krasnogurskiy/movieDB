import React from 'react';

import css from '../Header/Header.module.css'
const UserInfo = () => {

    // const image = localStorage.getItem('image')

    return (
        <div className={css.user}>
            {
                <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="user"/>
            }
        </div>
    );
};

export {UserInfo};