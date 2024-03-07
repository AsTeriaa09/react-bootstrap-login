import React from "react";
import "../Styles/CreateUser.css";

const CreateUser = () => {
  return (
    <>
      <div className="user-main-section">
        <header>
          <h3 className="pt-5 ps-5 pb-3">Create User</h3>
        </header>
        <form action="" className="mt-5">
          <div className="first-input-row pe-3">
            <div className="left-input-col me-5">
              <label htmlFor="User">Username</label> <br />
              <input type="text" placeholder="eg.asteria"/>
            </div>
            <div className="right-input-col">
              <label htmlFor="email">Email Address</label> <br />
              <input type="email" placeholder="eg.aster@gmail.com" />
            </div>
          </div>

          <div className="first-input-row pe-3 mt-4">
            <div className="left-input-col me-5">
              <label htmlFor="num">Number</label> <br />
              <input type="text" placeholder="eg.asteria" />
            </div>
            <div className="right-input-col">
              <label htmlFor="password">Password</label> <br />
              <input type="password" placeholder="eg.asteria" />
            </div>
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
