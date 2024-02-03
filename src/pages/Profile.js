import React from "react";
import "../Styles/profle.css";
import { Link } from "react-router-dom";
import userImg from "../images/user.jpg";

const Profile = () => {
  return (
    <>
      <div className="profile-section-1"></div>

      <div className="profile-section-2">
      {/* <img src={userImg} alt="" /> */}
      </div>
    </>
  );
};

export default Profile;
