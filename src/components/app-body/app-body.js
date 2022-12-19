import React,{Component} from "react";
import './app-body.css';
import Filter from "../filter/filter";
import Films from "../all-films/all-film";
import allfilmsNorm from "../resources/films";




export default class Section extends Component{
    constructor(props) {
        super(props);

        this.state = {
            filterFilms: [],
            allfilmsNorm1: allfilmsNorm
        };

        this.state.filterFilms = this.state.allfilmsNorm1;
        this.choseCategory = this.choseCategory.bind(this);
       
    }

      onClick() {
        this.setState({ show: 'active' });
        console.log(this.state);
      }

      choseCategory(categories){
        if(categories === 'TOATE'){
            this.setState({
                filterFilms: allfilmsNorm
            })
        }
        else{this.setState({
            filterFilms: this.state.allfilmsNorm1.filter((e)=> e.cat === categories)
        })}
      }

     


render(){

    
    return(
       
            <div className="app">
                <div className="section-select">
                    <div className="section-button">
                        <div className="section-button-left"><button  className="total">TOTAL</button></div>
                        <div onClick={this.onClick} className='section-button-right'>
                            <button className="topfilme filmsActive">TOP FILME</button>
                            <button className="topserial">TOP SERIAL TV</button>
                            <button className="topanimation">TOP ANIMATION</button>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="section-filter">
                        <div  className="section-filter-right">
                            <Filter choseCategory = {this.choseCategory}/>
                        </div>
                        <div className="section-filter-left">
                            
                        </div>
                    </div>
                </div>
                <div className="section-films">
                    <Films allfilmsNorm = {this.state.filterFilms}/>
                </div>
            

            </div>

    )}


};

