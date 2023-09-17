import React, {useRef} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import css from "./Header.module.css"
import {UserInfo} from "../UserInfo/UserInfo";
import {useTheme} from "../../hooks/useTheme";


const Header = () => {
    const navigate = useNavigate()
    const {theme, setTheme} = useTheme();
    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const search = useRef()

    const logout = () => {
        localStorage.clear()
        navigate ("/")
    }

    const keywords = localStorage.getItem('name')

    return (
        <div className={css.header_wrap} >
            <div className={css.Header}>
                <div className={css.Bar_logo}>
                    <div>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <Link to={'/'}>kapik<sup>HUB</sup></Link>

                </div>
                <div className={css.moves}>
                    <NavLink to={""}>home</NavLink>
                    <NavLink to={"genres"}>genres</NavLink>
                    <div className={css.Search}>
                        <div className={css.submit}>
                            <form action="">
                                <input type="text" placeholder={"search"} ref={search} required={true}/>
                                <button onClick={() => {
                                    localStorage.setItem('keywords', search.current.value);
                                    navigate('/search');
                                }
                                }>search
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className={css.button_div}>
                        <button onClick={handleDarkThemeClick} className={css.light}><i ></i></button>
                        <button onClick={handleLightThemeClick} className={css.dark}><i ></i></button>
                    </div>
                    <div className={css.user_login}>
                        <UserInfo/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Header};
