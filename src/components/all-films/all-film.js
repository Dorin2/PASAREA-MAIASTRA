import React, {useState} from "react";
import Pagination from "../pagination/Pagination";
import Row from "../row/row";
import allfilmsNorm from "../resources/films";




                  
const allfilms = allfilmsNorm.sort(() => Math.random() - 0.5);

                  
const Films =()=>{



    let [films] = useState(allfilms);
    let [loading,setloading] = useState(false);
    let [currentPage, setcurrentPage] = useState(1);
    let [filmsPerPage] = useState(15);
    let lastFilmIndex = currentPage * filmsPerPage;
    let firstFilmIndex = lastFilmIndex - filmsPerPage;
    let currentFilms = films.slice(firstFilmIndex,lastFilmIndex);

    let paginate = (number) => {
     let dor = number.selected + 1;
        setcurrentPage(dor);
    };

        
    let pageNumber =[];


    for (let i = 1; i <=Math.ceil( allfilms.length/filmsPerPage); i++ ){
        pageNumber.push(i)
    };

    


    return(
        <>  
        
           
     
            <Row currentFilms={currentFilms}/>
            <span className="line"></span>
            <Pagination pageCount ={pageNumber.length} pageRangeDisplayed ={filmsPerPage} Click = {paginate}  />
            
      
          
        </>
    )

}

export default Films;


