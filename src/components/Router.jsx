import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Profile from "./profile/Profile";

const Router = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Router;
