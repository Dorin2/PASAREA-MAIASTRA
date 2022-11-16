import React from "react";
import './app-body.css';
import Card from "./content-body";

const Section =()=>{

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
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <span className="line"></span>
        
        </>

    )


}

export default Section;
