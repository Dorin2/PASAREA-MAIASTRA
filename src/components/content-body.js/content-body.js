import React,{Component} from 'react';
import './content-body.css';
import Topfilms from '../services/topfilms';


export default class Content extends Component {
  film = new Topfilms();
  state = {
    Title: null,
    Rated: null,
    Runtime: null,
    Genre: null,
    imdbRating: null,
    Year: null,
    Poster: null,
    imdbVotes: null
  }
  
  // updateFilm(){
  //   const title = 'tt3896198';
  //   this.film.getFilms(title).then((res)=> console.log(res));
  // };

  

  // film.getFilms().then(res=>console.log(res));
   
  render() {
    const {Title,Rated,Runtime,Genre,imdbRating,Year,Poster,imdbVotes} = this.state;
    const title = 'tt3896198';
    this.film.getFilms(title).then((res)=> console.log(res));
    return (
          <div className='card-section'>
            <img className='image-card' src={Poster} alt='proba1' width='190px' height='290px' />
            <div className='card-section-down'>
              <strong className='title'>{Title}</strong>
              <div className='section-rating'>
                    <p className='imbd-Rating'>IMDb RATING:</p>
                    <img className='star' src='star.svg' width='16px' height='16px' alt='star' />
                    <div className='section-rating-right'>
                         <span className='rating'>{imdbRating}/10</span>
                         <span className='number-votes'>{imdbVotes}</span>
                    </div>
              </div>
              <div className='caracteristics'>
                    <span className='year'>{Year}</span>
                    <span className='PG'>{Rated}</span>
                    <span className='duration'>{Runtime}</span>
              </div>
            </div>

          </div>
      )
  }
};