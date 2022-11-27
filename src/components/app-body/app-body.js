import React,{Component} from "react";
import './app-body.css';
import Content from "../content-body.js/content-body";
import Films from "../all-films/all-film";


export default class Section extends Component{



render(){
  
    return(
        <>
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
                    <Films/>
                </div>
            </div>
            <span className="line"></span>
        
        </>

    )}


};
