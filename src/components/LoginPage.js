import React from "react";
import "../Styles/Login.css";
import { Link } from "react-router-dom";
import logo from "../images/image.png"

const LoginPage = () => {
  return (
    <>
    <div className="main-section">
    <div className="container">
        <div className="row">
          <div className="col-lg-6 left-col col-12"></div>
          <div className="col-lg-6 right-col col-12">
            <form >
              <div className="logo text-center">
                <img src={logo} alt="" />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control shadow-none"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="forgot-pass  d-flex flex-row-reverse">
                <Link to="#" className="link">
                  <p>forgot password?</p>
                </Link>
              </div>

              <button type="submit" className="btn my-3">
                Login
              </button>
              <div className="sign-up">
                <p>
                  Already have an account?{" "}
                  <Link to="#" className="link">
                    Sign up
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default LoginPage;
