import React from 'react';
import Card from './Card.jsx';
import style from './Cards.module.css'

export default function Cards({cities, onClose}) {
  
  return (
    <div className={style.cardcontainer}>
      
        {cities && cities.map(city => 
            <Card
              key={city.id}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
        )}
  </div>
  )
};

