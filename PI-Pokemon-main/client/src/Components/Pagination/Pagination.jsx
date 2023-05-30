import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className={style.pagination}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={index + 1 === currentPage ? style.activePage : style.page}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination