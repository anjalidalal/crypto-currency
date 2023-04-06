import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        " https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        console.log(response);
        setData(response.data);
      });
  }, []);

  console.log(data);
  return (
    <div className="flex flex-col items-center justify-center p-3">
      <h1>Crypto Currency</h1>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {data?.map((el) => (
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
      )}
    </div>
  );
};

export default Card;
