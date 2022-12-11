import React, {useState} from "react";
import './filter.css';


    
const Filter = ({choseCategory}) => {

    const [categories,setCategories] = useState([
        {key:'all',name:'TOATE'},{key:'interesant',name:'INTERESANT'} ,{key:'trist',name:'TRIST'},  
        {key:'melancolic',name:'MELANCOLIC'},{key:'vesel',name:'VESEL'} ,{key:'ciudatel',name:'CIUDATEL'}]);




    return (
        <>
            {categories.map((e)=>(
               <button className="filter" key={e.key} onClick={()=>{choseCategory(e.name)}}>{e.name}</button>
            ))}
           
        </>
    );
};

export default Filter;