import React,{useState} from "react";
import './row.css';
import Content from "../content-body.js/content-body";


const Row =({currentFilms})=>{


    let Row1 = currentFilms.slice(0,5);
    let Row2 = currentFilms.slice(5,10);
    let Row3 = currentFilms.slice(10,16);
    const Dorin1 =()=>{
        return(
            <div className="row">
            {Row1.map(e=><Content name={e.name} key ={e.name} url={e.url}/>)}
            </div>
        );
    };
    const Dorin2 =()=>{
        return(
            <div className="row">
            {Row2.map(e=><Content name={e.name} key ={e.name} url={e.url}/>)}
            </div>
        );
    };
    const Dorin3 =()=>{
        return(
            <div className="row">
            {Row3.map(e=><Content name={e.name} key ={e.name} url={e.url}/>)}
            </div>
        );
    };

    return(
        <div className="Page"> 
            <Dorin1/>
            <Dorin2/>
            <Dorin3/>
        </div>

    )
    
}
export default Row;

  