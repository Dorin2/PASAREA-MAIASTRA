import React, { Component } from "react";
import "./app-body.css";
import Filter from "../filter/filter";
import Films from "../all-films/all-film";
import allfilmsNorm from "../resources/films";
import allAnimation from "../resources/animation";
import allSerials from "../resources/serials";
import Categories from "./selectCategories/Categories";

export default class Section extends Component {
  constructor(props) {
    super(props);
     
    
    this.state = {
      allfilmsNorm1: this.shuffle(allfilmsNorm),
      allSerials: this.shuffle(allSerials),
      allAnimation: this.shuffle(allAnimation),
      filterFilms: [],
      filterElements: []
    };
    

    this.state.filterFilms = this.state.allfilmsNorm1;
    this.state.filterElements = this.state.filterFilms;
    this.returnElement = this.returnElement.bind(this);
    this.choseCategory = this.choseCategory.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }
 
   shuffle (array){
    let m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  
    return array;
  }


  returnElement(e){
    switch(e){
      case 'TOP FILME':
        this.setState({
          filterFilms: this.state.allfilmsNorm1,
          filterElements: this.state.allfilmsNorm1
        })
      
        break;
      case 'TOP SERIAL TV':
        this.setState({
          filterFilms: this.state.allSerials,
          filterElements: this.state.allSerials
        });
        break;
      case 'TOP ANIMATION':
        this.setState({
          filterFilms: this.state.allAnimation,
          filterElements: this.state.allAnimation
        })
        break;
        default:
          this.setState({
            filterFilms: this.state.allfilmsNorm1
          })
    }
  }
  
 


  choseCategory(categories) {

    if (categories === "TOATE") {
      this.setState({
        filterFilms: this.state.filterElements
      })
    } else {
      this.setState({
        filterFilms: this.state.filterElements.filter(
          (e) => e.cat === categories
        ),
      });
    }
  }
 

  render() {
    return (
      <div className="app">
        <div className="section-select">
          <div className="section-button">
            <div className="section-button-left">
              <button className="total">TOTAL</button>
            </div>
            <Categories returnElement={this.returnElement}/>
          </div>
          <span className="line"></span>
          <div className="section-filter">
            <div className="section-filter-right">
              <Filter choseCategory={this.choseCategory} />
            </div>
            <div className="section-filter-left"></div>
          </div>
        </div>
        <div className="section-films">
          <Films allfilmsNorm={this.state.filterFilms} />
        </div>
      </div>
    );
  }
}
