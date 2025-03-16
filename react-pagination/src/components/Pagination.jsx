import React from "react";

import "./Pagination.css";

const Pagination = ({ productCount, page, setPage, productPerPage }) => {
  const handlePageSelect = (page) => {
    setPage(page);
  };

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => handlePageSelect(page - 1)}>
        Prev
      </button>
      <div className="page-numbers">
        {[...Array(Math.ceil(productCount / productPerPage))].map(
          (_, index) => (
            <div
              key={index}
              className={`page ${page === index + 1 ? "active" : null}`}
              onClick={() => handlePageSelect(index + 1)}
            >
              {index + 1}
            </div>
          )
        )}
      </div>
      <button
        disabled={page === Math.ceil(productCount / productPerPage)}
        onClick={() => handlePageSelect(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
