/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "./assets/images/site-logo.png";

const Header = ({ logout }: { logout(): void }) => {
  const isloggedIn = useSelector((state: any) => state.isloggedIn);
  const products = useSelector((state: any) => state.Addedproducts);

  return (
    <div className="bg-black pt-5 pb-5 w-full fixed text-white bg-opacity-50 z-50">
      <div className="max-w-screen-xl m-auto overflow-hidden block">
        <div className="w-1/4 float-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="w-2/4 float-left mt-5">
          <Link className="mr-5" to="/">
            Home
          </Link>
          <Link className="mr-5" to="/about">
            About
          </Link>
          {isloggedIn.userState && <Link to="/account">Account</Link>}
        </div>
        <div className="w-1/4 float-left mt-5">
          {isloggedIn.userState ? (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <button type="submit" onClick={logout}>
              Logout
            </button>
          ) : (
            <span>
              <Link to="/signin">Login</Link> /<Link to="/signup">Sign up</Link>{" "}
            </span>
          )}
          <Link to="/cart" className="ml-5">
            Cart({products.cart.length})
          </Link>
        </div>
      </div>
      {/* <div className="fixed bg-black text-white bg-opacity-1 w-10 h-10 leading-10 rounded-full">
        <Link to="/cart">Cart {products.cart.length}</Link>
      </div> */}
    </div>
  );
};

export default Header;
