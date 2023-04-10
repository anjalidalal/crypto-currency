import React from "react";
import styles from "./App.module.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  handlePrevPage,
  handleLastPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} className={styles.notActive}>
        {" "}
        <img
          src="./prev.png"
          width="22px"
          height="22px"
          className="pr-1"
          alt=""
        />{" "}
      </button>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? styles.active : styles.notActive}
          >
            {page}
          </button>
        );
      })}
      <button onClick={handleLastPage} className={styles.notActive}>
        {" "}
        <img
          src="./next.png"
          width="22px"
          height="22px"
          className="pl-1"
          alt=""
        />{" "}
      </button>
    </div>
  );
};

export default Pagination;
