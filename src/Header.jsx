import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/site-logo.png";

function Header() {
  return (
    <div className="bg-black pt-5 pb-5 w-full fixed text-white bg-opacity-50 z-50">
      <div className="max-w-screen-xl m-auto overflow-hidden block">
        <div className="w-1/4 float-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="w-2/4 float-left mt-5">
          <Link className="mr-5" to="/">
            Home
          </Link>
          <Link className="mr-5" to="/about">
            About
          </Link>
        </div>
        <div className="w-1/4 float-left mt-5">
          <Link to="/login">Login</Link>/<Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
