import React, { Component } from "react";
import "./app-body.css";
import Filter from "../filter/filter";
import Films from "../all-films/all-film";
import allfilmsNorm from "../resources/films";
import Categories from "./selectCategories/Categories";

export default class Section extends Component {
  constructor(props) {
    super(props);
    const shuffle = (array) => {
      let m = array.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
    
      return array;
    }
    this.state = {
      filterFilms: [],
      allfilmsNorm1: shuffle(allfilmsNorm)
    };

    this.state.filterFilms = this.state.allfilmsNorm1;
    this.choseCategory = this.choseCategory.bind(this);
  }
  choseCategory(categories) {

    if (categories === "TOATE") {
      this.setState({
        filterFilms: this.state.allfilmsNorm1,
      })
    } else {
      this.setState({
        filterFilms: this.state.allfilmsNorm1.filter(
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
            <Categories/>
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
