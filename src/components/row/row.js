import React from "react";
import './row.css';
import Content from "../content-body.js/content-body";


const Row =({currentFilms})=>{

    const Row1 = currentFilms.slice(0,5);
    const Row2 = currentFilms.slice(5,10);
    const Row3 = currentFilms.slice(10,16);
    
    console.log(Row3);
    return(
        <> 
             <div className="row">
            {Row1.map(e=><Content name={e}/>)}
            </div>
            <div className="row">
            {Row2.map(e=><Content name={e}/>)}
            </div>
            <div className="row">
            {Row3.map(e=><Content name={e}/>)}
            </div>
        </>

    )
    
}
export default Row;