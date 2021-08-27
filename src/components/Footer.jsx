import React from 'react';
import style from './Footer.module.css'

export default function Footer (){

    return (
        <div className={style.footerContainer}>
           <div className={style.footer}>
            <p>About us</p>
            <p>Info</p>
           </div>
        </div>
    )
};