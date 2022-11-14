import React from "react";
import './app-body.css';

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
                    <button className="filter1">INTERESANT</button>
                    <button className="filter2">TRIST</button>
                    <button className="filter3">MELANCOLIC</button>
                    <button className="filter4">VESEL</button>
                    <button className="filter5">CIUDATEL</button>
                </div>
            </div>

        
        </>

    )


}

export default Section;
