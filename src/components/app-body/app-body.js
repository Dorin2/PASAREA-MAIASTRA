import React,{Component} from "react";
import './app-body.css';
import FilmsPage1 from "../all-films/all-film1.js";
import FilmsPage2 from "../all-films/all-film2.js";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';



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
                        <button className="filter-inactive">INTERESANT</button>
                        <button className="filter-inactive">TRIST</button>
                        <button className="filter-inactive">MELANCOLIC</button>
                        <button className="filter-inactive">VESEL</button>
                        <button className="filter-inactive">CIUDATEL</button>
                    </div>
                </div>
                <div className="section-films">
                    <div className="section-rown">
                        {/* <FilmsPage1/> */}
                        {/* <FilmsPage2/> */}
                        <Routes>
                        {/* <Route path="/filmpage2" element = {<FilmsPage1/>}/>  */}

                        {/* <Route path="/filmpage2" element = {<FilmsPage2/>}/>  */}
                        </Routes>
                    </div>
                </div>
                <span className="line"></span>

            </div>
        </Router>

    )}


};
