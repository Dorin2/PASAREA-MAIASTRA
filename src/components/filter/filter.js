import React, {useState} from "react";
import './filter.css';


    
const Filter = ({choseCategory}) => {

    const [categories,setCategories] = useState([
        {id:0,key:'all',name:'TOATE',status: true},{id:1,key:'interesant',name:'INTERESANT',status: false} ,{id:2,key:'trist',name:'TRIST',status: false},  
        {id:3,key:'melancolic',name:'MELANCOLIC',status: false},{id:4,key:'vesel',name:'VESEL',status: false} ,{key:'ciudatel',name:'CIUDATEL',status: false}]);


        const chooseItem = (id) => {
            const newArr = categories.map((item) =>
              item.id === id ? { ...item, status: true } : { ...item, status: false }
            );
            setCategories(newArr);
            console.log(newArr)
          };
        

    return (
        <>
            {categories.map((e)=>(
               <button style={{ backgroundColor: e.status ? "#7A785A" : "" }} className="filter" key={e.key} onClick={()=>{choseCategory(e.name);chooseItem(e.id);}}>{e.name}</button>
            ))}
           
        </>
    );
};

export default Filter;