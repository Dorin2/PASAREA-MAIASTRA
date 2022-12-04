import React,{Component} from "react";
import './app-body.css';
import FilmsPage1 from "../all-films/all-film1";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pagination from "../pagination/pagination";
import PagContent from "../all-films/pag-content";



export default class Section extends Component{



render(){
  
    return(
        <Router>
            <div className="app">
                <div className="section-select">
                    <div className="section-button">
                        <div className="section-button-left"><button  className="total">TOTAL</button></div>
                        <div className="section-button-right">
                            <button className="topfilme">TOP FILME</button>
                            <button className="topserial">TOP SERIAL TV</button>
                            <button className="topanimation">TOP ANIMATION</button>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className="section-filter">
                        <div  className="section-filter-right">
                            <button className="filter-inactive">INTERESANT</button>
                            <button className="filter-inactive">TRIST</button>
                            <button className="filter-inactive">MELANCOLIC</button>
                            <button className="filter-inactive">VESEL</button>
                            <button className="filter-inactive">CIUDATEL</button>
                        </div>
                        <div className="section-filter-left">
                            <Pagination/>
                        </div>
                    </div>
                </div>
                <div className="section-films">
                    <FilmsPage1/>
                </div>
                <span className="line"></span>
                <div className="section-filter">
                        <div  className="section-filter-right">
                            
                        </div>
                        <div className="section-filter-left">
                            <Pagination/>
                        </div>
                    </div>

            </div>
        </Router>

    )}


};
