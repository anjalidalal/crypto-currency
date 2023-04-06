import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = () => {
  const [data, setData] = useState([]);
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
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1>Crypto Currency</h1>
    </div>
  );
};

export default Card;
