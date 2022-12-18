import React, {useState} from "react";
import Pagination from "../pagination/Pagination";
import Row from "../row/row";




                  


const Films =({allfilmsNorm})=>{
    console.log(allfilmsNorm);
    
    const allfilms = allfilmsNorm.sort(() => Math.random() - 0.5);


    let [currentPage, setcurrentPage] = useState(1);
    let [filmsPerPage] = useState(15);
    let lastFilmIndex = currentPage * filmsPerPage;
    let firstFilmIndex = lastFilmIndex - filmsPerPage;
    let currentFilms = allfilms.slice(firstFilmIndex,lastFilmIndex);
    console.log(firstFilmIndex);
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
            <Pagination pageCount ={pageNumber.length} pageRangeDisplayed ={filmsPerPage} OnClick = {paginate}  />
            
      
          
        </>
    )

}

export default Films;


