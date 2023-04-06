import React from "react";
import { Route } from "react-router";
import Card from "./Card";
import { Routes } from "react-router-dom";
import Home from "./Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />} />
        <Route to="/crypto-card" element={<Card />} />
      </Routes>
    </>
  );
};

export default Router;
