import React from 'react';
import './content-body.css';
import Topfilms from '../services/topfilms';


const Card = ()=>{
  const film = new Topfilms();

  film.getFilms().then(res=>console.log(res));
    return (
        <div className='card-section'>
          <img className='image-card' src='proba1.jpg' alt='proba1' width='190px' height='290px' />
          <div className='card-section-down'>
            <strong className='title'>The Lord of the Rings: The Fellowship of the Ring</strong>
            <div className='section-rating'>
                  <p className='imbd-Rating'>IMDb RATING:</p>
                  <img className='star' src='star.svg' width='16px' height='16px' alt='star' />
                  <div className='section-rating-right'>
                       <span className='rating'>8.8/10</span>
                       <span className='number-votes'>1.9M</span>
                  </div>
            </div>
            <div className='caracteristics'>
                  <span className='year'>2001</span>
                  <span className='PG'>PG-13</span>
                  <span className='duration'>2h 58m</span>
            </div>
          </div>
      
        </div>
    )
};

export default Card;