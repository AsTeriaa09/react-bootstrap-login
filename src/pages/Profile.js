import React from "react";
import "../Styles/profle.css";
import { Link } from "react-router-dom";
import userImg from "../images/userimg.jpeg";
import { RiLockPasswordFill } from "react-icons/ri";


const Profile = () => {
  return (
    <>
      <div className="profile-section-1"></div>

      <div className="profile-section-2">
        <div className="profile-right-side">
          <img src={userImg} alt="" />
          <div className="profile-right-side-text ps-4">
            <div className="name">Asteria</div> <div className="title">Admin</div> 
            
          </div>
          
        </div>
        <div className="profile-left-side">
         <div className="pass-icon"><RiLockPasswordFill /></div> Change password
        </div>
      </div>
    </>
  );
};

export default Profile;
