import React from "react";
import { Link } from "react-router-dom";
import './pagination.css';




const Pagination =({filmsPerPage, totalFilms})=>{


    const pageNumber =[]


    for (let i = 1; i <=Math.ceil( totalFilms/filmsPerPage); i++ ){
        pageNumber.push(i)
    };
return(

    <div className="pagination">
        <ul className="pagination">
               {pageNumber.map(number =>(
                <li className="page-item" key = {number}>
                    <Link href="#" className="link">{number}</Link>
                </li>
               ))}
        </ul>
    </div>

)
};

export default Pagination;