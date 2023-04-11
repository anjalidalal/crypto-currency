import React from "react";
import Login from "./Login";
import Card from "./Card";
import { useSelector } from "react-redux";
import CardDetail from "./CardDetail";

const Home = () => {
  const user = useSelector((state) => state.user);
  return <>{user ? <CardDetail /> : <Login />}</>;
};
export default Home;
