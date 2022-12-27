import React,{Component} from 'react';
import './content-body.css';
import Topfilms from '../services/topfilms';


export default class Content extends Component {

  constructor(props) {
    super(props);
    this.updateFilm();

  };


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
  
  
  updateFilm(){
    const title =`${this.props.name}`;
    this.film.getFilms(title).then((res)=> {
      this.setState({
        Title: res.Title,
        Rated: res.Rated,
        Runtime: res.Runtime,
        Genre: res.Genre,
        imdbRating: res.imdbRating,
        Year: res.Year,
        Poster: res.Poster,
        imdbVotes: res.imdbVotes,
        link:`https://www.bing.com/search?q=${res.Title}+%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&qs=n&form=QBRE&sp=-1&pq=theoffice+%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B5%D1%82%D1%8C+%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD+%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE&sc=4-35&sk=&cvid=4C5E6B83C7314C39ABBD8546EE2C14DE&ghsh=0&ghacc=0&ghpl=`
      })
    });
  };

   
  render() {
    const {Title,Rated,Runtime,imdbRating,Year,Poster,imdbVotes,link} = this.state;
    return (
          <div className='card-section'>
            <a href={link} target="_blank" rel="noreferrer">
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
            </a>

          </div>
      )
  }
};