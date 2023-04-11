import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import Header from "./Header";

const CardDetail = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
  console.log(data);
  return (
    <div className="p-3">
      <Header />
      <TableContainer component={Paper} className="mt-16">
        <Table className="w-full" aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Logo</TableCell> */}
              <TableCell component="th" scope="row" align="leftt">
                Name
              </TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">Toatal_Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el) => (
              <TableRow
                key={el.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell align="right"></TableCell> */}
                <TableCell align="left">{el.name}</TableCell>
                <TableCell align="right">${el.current_price}</TableCell>
                <TableCell align="right">{el.symbol}</TableCell>
                <TableCell align="right">${el.total_supply}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CardDetail;
