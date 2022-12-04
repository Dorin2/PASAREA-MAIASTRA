import React from "react";
import Content from "../content-body.js/content-body";
import { fifteenElements } from "./all-film1";


const Row =(props)=>{
        
    const id = props.id;
    
    
    return(
        <div className="section-rown">
         {id}
        </div>
    )
}

const PagContent =(props)=>{


    return(
        <>
        <Row id = {props.id}/>
        </>
    )
}

export default PagContent;