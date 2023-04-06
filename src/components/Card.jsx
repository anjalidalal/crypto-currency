import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import Pagination from "./Pagination";

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
        console.log(response);
        setData(response.data);
        setIsLoading(false);
      });
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center p-3">
      {isLoading ? (
        <div className="text-white text-2xl font-semiBold flex flex-col items-center gap-3 my-20">
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
          <div>
            {" "}
            <h1 className="text-white text-3xl font-bold my-5">
              Crypto Currency
            </h1>
            <Pagination
              totalPosts={data.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center px-7 gap-8">
            {currentPosts?.map((el) => (
              <div
                key={el.id}
                className=" h-64 w-60 p-2.5 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center"
              >
                <img src={el.image} className="w-9/12 h-32" alt="" />
                <h1 className="text-2xl font-bold my-3">{el.name}</h1>
                <p>${el.current_price}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
