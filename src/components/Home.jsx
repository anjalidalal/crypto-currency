import React from "react";
import Login from "./Login";
import Card from "./Card";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{user ? <Card /> : <Login />}</>;
};
export default Home;
