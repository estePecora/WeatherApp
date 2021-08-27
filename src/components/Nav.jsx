import React from 'react';
import style from './Nav.module.css';
import SearchBar from './SearchBar.jsx';


export default function Nav({onSearch}) {
    
    return (
        <nav>
            <div className={style.navbarContainer}>
                <h1 className={style.title}>My Weather App</h1>
                <SearchBar 
                  onSearch={onSearch}
                />
            </div>
        </nav>
    )
};