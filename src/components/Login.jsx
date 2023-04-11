import React from "react";
import { signIn } from "../firebase";

const Login = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="w-64 h-80 bg-slate-50 flex flex-col justify-between items-center p-4 rounded-2xl">
        <h1 className="text-2xl font-bold text-slate-600 mt-1">Sign In</h1>
        <button
          className="w-52 h-11 p-2 flex items-center justify-center gap-2 rounded-xl bg-slate-300 font-semiBold"
          onClick={() => {
            signIn();
          }}
        >
          <img src="./google.png" width="20px" height="20px" alt="" /> Sign In
          With Google{" "}
        </button>
        <p className="text-slate-600 text-center text-sm p-1 mb-1 font-semiBold">
          * By Continuing you agree to the{" "}
          <span className="text-pink-600"> Terms of Services </span>
          and <span className="text-pink-600">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
