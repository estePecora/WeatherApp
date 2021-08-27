import React from 'react';
import style from './Nav.module.css';
import SearchBar from './SearchBar.jsx';


export default function Nav({onSearch}) {
    
    return (
        <nav>
            <div className={style.navbarContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>My Weather App</h1>
                    <p className={style.secondtext}>Search cities to learn their current weather</p>
                </div>
                
                <div className={style.searchContainer}>
                    <SearchBar 
                    onSearch={onSearch}
                    />
                </div>
            
            </div>
        </nav>
    )
};