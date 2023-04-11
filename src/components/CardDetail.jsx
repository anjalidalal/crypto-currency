import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./App.module.css";
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
    <>
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
          <div className={styles.tableComponent}>
            <TableContainer component={Paper}>
              <Table className={styles.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Logo</TableCell>
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
                      <TableCell align="right">
                        <img
                          src={el.image}
                          className="rounded-full w-8 h-8 "
                          alt=""
                        />
                      </TableCell>
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
        </>
      )}
    </>
  );
};

export default CardDetail;
