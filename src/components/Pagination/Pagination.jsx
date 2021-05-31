import React, { useState } from "react";
import "./pagination.css";

export default function Pagination({
  postPerPage,
  totalPosts,
  paginate,
  setCurrentPage,
  currentPage,
}) {
  const [pageNumberLimit] = useState(3);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(3);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  var pageNumber = [];

  for (var i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }

  const renderPagenumber = pageNumber.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div className="innerPagination">
          <ul id="innerPageNo">
            <li onClick={() => paginate(number)}>{number}</li>
          </ul>
        </div>
      );
    } else {
      return null;
    }
  });

  let PageIncrementBtn = null;
  if (pageNumber.length > maxPageNumberLimit) {
    PageIncrementBtn = <li>&hellip;</li>;
  }

  let PagedecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    PagedecrementBtn = <li>&hellip;</li>;
  }

  function handleprev() {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  }
  function handlenext() {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }
  return (
    <div className="Page">
      <button
        className="prvbtn"
        onClick={handleprev}
        disabled={currentPage === pageNumber[0] ? true : false}
      >
        <img
          width="100%"
          height="100%"
          src="https://image.flaticon.com/icons/png/512/860/860790.png"
          alt=""
        />
      </button>
      {PagedecrementBtn}
      {renderPagenumber}
      {PageIncrementBtn}
      <button
        className="nextbtn"
        onClick={handlenext}
        disabled={currentPage === pageNumber.length ? true : false}
      >
        <img
          width="100%"
          height="100%"
          src="https://image.flaticon.com/icons/png/512/860/860790.png"
          alt=""
        />
      </button>
    </div>
  );
}
