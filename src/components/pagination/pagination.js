import React from 'react';
import ReactPaginate from 'react-paginate';
import './pagination.css';

const Pagination = props => {

  
  return (
    <div>
      <ReactPaginate
      className='dorin'
        breakLabel="..."
        nextLabel=">"
        onPageChange={props.OnClick}
        pageRangeDisplayed={props.pageRangeDisplayed}
        pageCount={props.pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};



export default Pagination;