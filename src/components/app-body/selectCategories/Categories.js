import React from "react";



const Categories =()=>{

    const Categoriess = [{name:'TOP FILME',id:1,status:true},{name:'TOP SERIAL TV',id:2,status:false},{name:'TOP ANIMATION',id:3,status:false}];



    return(
        <div className="section-button-right">
              {Categoriess.map((e)=>(
              <button>{e.name}</button>))}
        </div>
    )
}

export default Categories;