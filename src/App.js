import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "./Redux/Action";
import { auth } from "./firebase";
import Login from "./components/Login";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
          photo: user.photoURL,
          phoneNumber: user.phoneNumber,
        })
      );
    });
  }, []);
  return (
    <>
      <Login />
    </>
  );
};

export default App;
