import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed inset-0  bg-gray-800 flex items-center w-screen h-10 justify-between px-2 py-6">
      <div className="flex items-center gap-1 mx-1">
        <h1 className="text-white text-2xl font-bold">Crypto Currency</h1>
        <img src="./crypto.png" className="w-9 h-9" alt="" />
      </div>
      <Link to="/profile">
        <img src="./profile.png" className="w-8 h-8 mx-1" alt="" />
      </Link>
    </div>
  );
};

export default Header;
