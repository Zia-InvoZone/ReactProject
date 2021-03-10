import React from "react";
import { Link } from "react-router-dom";

function signIn() {
  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold">Signin Form</div>
      <div className="">
        <form className="pt-10">
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="email"
            name="email"
            placeholder="Email"
            required
            value=""
          />
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="password"
            name="pass"
            placeholder="Password"
            required
            value=""
          />
          <input
            className="bg-black text-white w-1/4 p-2"
            type="submit"
            value="Sign In"
          />
          <div className="mt-5">
            <div>
              <Link to="/signup">Create account</Link>
            </div>
            <div>
              <Link to="/resetpass">Reset your password</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signIn;
