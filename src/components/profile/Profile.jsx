import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "../../firebase";
import man from "./icons/man.png";
import woman from "./icons/woman.png";
import pink from "./icons/pink.png";
import pinkMan from "./icons/pink2.png";
import styles from "../App.module.css";

const Profile = () => {
  const { user } = useSelector((state) => state);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [gender, setGender] = useState("");

  const handleMale = () => {
    setIsMale(true);
    setIsFemale(false);
    setGender("Male");
  };

  const handleFemale = () => {
    setIsMale(false);
    setIsFemale(true);
    setGender("Female");
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-200">
      <div className="p-2 flex flex-col gap-3 items-center shadow-lg rounded-xl bg-white">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <div className="flex items-center gap-2 justify-center md:my-3">
          <img src={user?.photo} className={styles.img} alt="" />
          <div>
            <h1 className="text-slate-800 font-bold text-lg">
              {user?.displayName}{" "}
            </h1>
            <p className="text-gray-400 text-sm"> {user?.email} </p>
          </div>
        </div>
        <div className={styles.form}>
          <div>
            <p className={styles.title}>Name</p>
            <p className={styles.input}>{user?.displayName}</p>
          </div>
          <div>
            <p className={styles.title}>Email</p>
            <p className={styles.input}>{user?.email}</p>
          </div>
          <div>
            <p className={styles.title}>Gender</p>
            <div className={styles.box}>
              <p>{gender}</p>
              <div>
                <img
                  src={isFemale ? pink : woman}
                  width="27px"
                  height="27px"
                  onClick={handleFemale}
                  alt=""
                />
                <img
                  src={isMale ? pinkMan : man}
                  width="28px"
                  height="28px"
                  onClick={handleMale}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <p className={styles.title}> Date Of Birth</p>
            <input
              type="date"
              name=""
              value=""
              className={styles.input}
              placeholder="MM/DD/YYYY"
            />
          </div>
          <div>
            <p className={styles.title}>Log Out</p>
            <img src="./logout.png" width="25px" height="25px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
