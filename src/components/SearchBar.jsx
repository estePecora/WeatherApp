import React, {useState} from 'react';

import style from './SearchBar.module.css'



export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input 
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={event => setCity(event.target.value)}
        className={style.input}
      />
      <input 
      type="submit" value="Search"
      className={style.button}
      />
    </form>
  );
}
