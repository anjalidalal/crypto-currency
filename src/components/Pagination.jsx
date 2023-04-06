import React from "react";
import styles from "./App.module.css";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {/* <button>Prev</button> */}
      {pages.map((page, index) => {
        return (
          <>
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage ? styles.active : styles.notActive
              }
            >
              {page}
            </button>
          </>
        );
      })}
      {/* <button>Next</button> */}
    </div>
  );
};

export default Pagination;
