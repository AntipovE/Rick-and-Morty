import React from "react";
import classNames from 'classnames';
import { Link } from "react-router-dom";
import './pagination.scss'


const PaginateItem = ({page,currentPage}) => {
  const liClasses = classNames({
    "li-item": true,
    active: currentPage === page
  });
  return (
    <li className={liClasses}>
      <Link to={`?page=${page}`} className="link">
        {page}
      </Link>
    </li>
  )
}

const Pagination = ({allPages,currentPage,url}) => {
    const pages = [...Array(allPages)].map((e,i)=>i+1)

  return <ul style={{display:'flex',justifyContent:'center'}}>
      {pages.map((page,i)=>(
          <PaginateItem
          key={i}
          currentPage={currentPage}
          page = {page}
          url = {url}
          />
      ))}
  </ul>;
};
export default Pagination;
