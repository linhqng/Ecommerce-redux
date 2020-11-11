import React, { useState } from "react";

const Pagination = (props) => {
  const {
    currentPage,
    productsPerPage,
    totalProducts,
    handlePageChange,
  } = props;
  const [displayPages, setDisplayPages] = useState(7);
  const pageNumber = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumber.push(i);
    }
  } else {
    for (let i = displayPages - 6; i <= displayPages; i++) {
      pageNumber.push(i);
    }
  }

  return (
    <div data-reactroot="">
      <ul className="ais-pagination">
        <li
          className={
            currentPage <= 1
              ? "ais-pagination--item ais-pagination--item__previous ais-pagination--item__disabled"
              : "ais-pagination--item ais-pagination--item__previous"
          }
        >
          <a
            onClick={() => {
              handlePageChange(currentPage - 1);
              if (currentPage >= 5 && currentPage < totalProducts - 2) {
                setDisplayPages(currentPage + 2);
              }
            }}
            className="ais-pagination--link"
            aria-label="Previous"
            href="#"
          >
            <i className="fa fa-angle-left fa-2x"></i> Previous page
          </a>
        </li>
        {pageNumber.map((num, index) => (
          <li
            key={index}
            className={
              num == currentPage
                ? "ais-pagination--item ais-pagination--item__page ais-pagination--item__active active"
                : "ais-pagination--item ais-pagination--item__page"
            }
          >
            <a
              className="ais-pagination--link"
              aria-label={num}
              onClick={() => {
                handlePageChange(num);
                if (currentPage >= 6 && currentPage < totalPages - 3) {
                  setDisplayPages(num + 3);
                }
              }}
              href="#"
            >
              {num}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage >= totalPages
              ? "ais-pagination--item ais-pagination--item__next ais-pagination--item__disabled"
              : "ais-pagination--item ais-pagination--item__next "
          }
        >
          <a
            onClick={() => {
              handlePageChange(currentPage + 1);
              if (currentPage >= 4 && currentPage < totalProducts - 4) {
                setDisplayPages(currentPage + 4);
              }
            }}
            className="ais-pagination--link"
            aria-label="Next"
            href="#"
          >
            Next page <i className="fa fa-angle-right fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
