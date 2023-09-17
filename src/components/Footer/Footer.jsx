import React from 'react';

import css from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={css.footer}>
            <p className={css.footer_text}>Copyright © 2023</p>
            <div className={css.info}>
                <div className={css.numbers}>
                    Contacts:
                    <div>097-721-12-77</div>
                    <div>kao@gmail.com</div>
                </div>
               
                <div className={css.social}>
                    <div className={css.facebook}>
                        <a href="https://www.facebook.com/"> Facebook </a>

                    </div>
                    <div className={css.instagram}>
                        <a href="https://www.instagram.com/">Instagram</a>

                    </div>
                        
                </div>
            </div>
        </footer>
    );
};

export {Footer};