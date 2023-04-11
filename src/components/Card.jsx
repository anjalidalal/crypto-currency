import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import Pagination from "./Pagination";
import Header from "./Header";
import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(9);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }, []);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;
  const currentPosts = data.slice(firstIndex, lastIndex);

  const handlePrevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLastPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {isLoading ? (
        <div className="text-slate-800 text-2xl font-semiBold flex flex-col items-center gap-3 my-20">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="66"
            visible={true}
          />
          Loading...
        </div>
      ) : (
        <>
          <Header />
          <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handlePrevPage={handlePrevPage}
            handleLastPage={handleLastPage}
          />
          <div className=" items-center grid my-7 justify-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {currentPosts?.map((el) => (
              <>
                <Link to="/currency-detail">
                  <div
                    key={el.id}
                    className=" h-64 w-60 p-2.5 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center"
                  >
                    <img src={el.image} className="w-9/12 h-32" alt="" />
                    <h1 className="text-2xl font-bold my-3">{el.name}</h1>
                    <p>${el.current_price}</p>
                  </div>
                </Link>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
