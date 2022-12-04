import React from "react";
import './pagination.css';
import { Link } from "react-router-dom";
import PagContent from "../all-films/pag-content";


const Pagination =()=>{

let ddId =()=>{
    alert('dssdds');
}
return(

    <div className="pagination">
        <ul>
            <li>
                <Link className="link" to='/' id={1} onClick ={ddId}>1</Link>
            </li>
            <li>
            <Link className="link" to='/filmpage2'>2</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage3'>3</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage4'>4</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage5' key={5}>5</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage6'>6</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage7'>7</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage8'>8</Link>
            </li>
            <li>
                <Link className="link" to='/filmpage9'>9</Link>
            </li>
            <button>{'>'}</button>
        </ul>
    </div>

)
};

export default Pagination;