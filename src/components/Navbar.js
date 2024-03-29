import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../images/image.png";
import { ImProfile } from "react-icons/im";
import { LuUserSquare2 } from "react-icons/lu";
import { FaUsersBetweenLines } from "react-icons/fa6";

import { FaUserCircle } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import UpperNav from "./UpperNav";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const toggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleResize = () => {
      // Check if screen width is less than or equal to 767px
      if (window.innerWidth <= 767) {
        setOpen(false); 
      } else {
        setOpen(true); // Automatically open the sidebar in wider screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="containerr">
        <div
          className="sidebarr"
          style={{
            width: open ? "300px" : "70px",
            backgroundColor: open ? "#f6f8fa" : "#fff",
            zIndex: open ? "9999" : "1",
          }}
        >
          <div className="top_section">
            <div className="logo" style={{ display: open ? "flex" : "none" }}>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>{" "}
              <p>Dentalytics</p>
            </div>
            <div
              className="bars"
              style={{
                marginLeft: open ? "25px" : "25px",
                marginRight: open ? "25px" : "0px",
                marginBottom: open ? "10px" : "0px",
              }}
            >
              <IoMenu onClick={toggle} />
            </div>
           
          </div>
          <hr />

          <div className="items">
            <Link
              to="/profile"
              className="link"
              activeclassName="active"
              style={{
                paddingLeft: open ? "15px" : "0px",
                display: open ? "flex" : "none",
              }}
            >
              <div className="icon">
                <ImProfile />
              </div>
              <div className="link_text">Profile</div>
            </Link>

            <Link
              to="/"
              className="link my-3"
              activeclassName="active"
              style={{
                paddingLeft: open ? "15px" : "0px",
                display: open ? "flex" : "none",
              }}
            >
              <div className="icon">
                <FaUsersBetweenLines />
              </div>
              <div
                className="link_text"
                // style={{ display: open ? "flex" : "none" }}
              >
                User List
              </div>
            </Link>

            <Link
              to="/user"
              className="link"
              activeclassName="active"
              style={{
                paddingLeft: open ? "15px" : "0px",
                display: open ? "flex" : "none",
              }}
            >
              <div className="icon">
                <LuUserSquare2 />
              </div>
              <div
                className="link_text"
                // style={{ display: open ? "block" : "none" }}
              >
                Create User
              </div>
            </Link>
          </div>
        </div>
        
        <main className="NavbarMain"> <UpperNav/> </main>
        
      </div>
    </>
  );
};

export default Navbar;
