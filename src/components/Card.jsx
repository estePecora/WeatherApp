import React from 'react';
import style from './Card.module.css'

export default function Card({min, max, name, img, onClose, id}) {

  return (
    <div className={style.cardcontainer}>
        <button className={style.closebutton} onClick = {onClose}>X</button>
        <div className={style.innercontainer}>
            <h1>{name}</h1>

            <div className={style.minmax}>
                <p>MIN {min}º</p>
                <p>MAX {max}º</p> 
                
                <img src= {'http://openweathermap.org/img/wn/' + img + '@2x.png'} alt='Imag not found' />
            </div>
        </div>
    </div>  
        
  )
};

