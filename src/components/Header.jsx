import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed inset-0  bg-white shadow-md flex items-center w-screen h-10 justify-between px-2 py-6">
      <div className="flex items-center gap-1 mx-1">
        <h1 className="text-slate-800 text-2xl font-bold">Crypto Currency</h1>
        <img src="./crypto.png" className="w-9 h-9" alt="" />
      </div>
      <Link to="/profile">
        <div className="bg-gray-950 w-9 h-9 border-2 border-black rounded-full">
          <img src="./profile.png" className="w-full h-full" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
