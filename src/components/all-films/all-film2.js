import React from "react";
import Content from "../content-body.js/content-body";
import {allfilms} from  "./all-film1.js";

const FilmsPage2=()=>{

let size = 5;

let totalfilms = [];

for (let i = 0; i < Math.ceil(allfilms.length/size); i++){
    totalfilms[i] = allfilms.slice((i*size),(i*size) + size);
}

console.log(totalfilms);
    

const Item = totalfilms[3].map(e=><Content name = {e}/>);
const Item1 = totalfilms[4].map(e=><Content name = {e}/>);
const Item2 = totalfilms[5].map(e=><Content name = {e}/>);

return(
    <>
    <div className="rown">
    {Item}
    </div>
    <div className="rown">
    {Item1}
    </div>
    <div className="rown">
    {Item2}
    </div>
    </>
);

};

export default FilmsPage2;

