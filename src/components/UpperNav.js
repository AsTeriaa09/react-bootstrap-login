import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import userImg from "../images/user.jpg";
import "../Styles/upperNav.css";
import { IoMenu } from "react-icons/io5";
import Profile from "../pages/Profile";

const UpperNav = () => {
  // const [scroll , setScroll ] = useState(false);
  // useEffect(()=>{
  //     window.onscroll = ()=>{
  //         if(window.scrollY > 22){
  //             setScroll(true);
  //         }else{
  //             setScroll(false)
  //         }
  //     }
  // },[])

 
  return (
    <div>
      {/* <div className={scroll ? "navbar navbar-float py-3" : "navbar py-3"}> */}
      <div className="navbar py-4">
        <div className="left-section">
       
          <FaHome /> / profile / user list
        </div>
        <div className="right-section">
          <img src={userImg} alt="" />
        </div>
      </div>

      <div className="main-body">
        {/* <Profile/> */}
      </div>
    </div>
  );
};

export default UpperNav;
