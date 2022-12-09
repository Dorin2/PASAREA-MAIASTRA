import React from "react";
import './pagination.css';




const Pagination =({filmsPerPage, totalFilms, paginate})=>{


const pageNumber =[];


for (let i = 1; i <=Math.ceil( totalFilms/filmsPerPage); i++ ){
        pageNumber.push(i)
};

const ClickActive = e => {
    const foo = document.querySelectorAll("button.link");

    for (var i = 0; i < foo.length; i++) {
      foo[i].classList.remove("buton-active");
    }

    e.currentTarget.classList.add("buton-active");
  };



return(

    <div className="pagination">
        <ul className="pagination">
               {pageNumber.map(number =>(
                <li className="page-item" key = {number}>
                    <button onClick={(e)=> {paginate(number); ClickActive(e)}}  
                    className="link " 
                    id= {number}>{number}</button>
                </li>
               ))}
        </ul>
    </div>

)
};

export default Pagination;