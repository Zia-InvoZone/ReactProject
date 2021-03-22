/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { firebaseApp } from "./firebase";

const SignIn = ({ handleAuth }: { handleAuth(): void }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const history = useHistory();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailError("");
    setPassError("");
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        history.push("/account");
        handleAuth();
      })
      .catch((err) => {
        // eslint-disable-next-line default-case
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPassError(err.message);
            break;
        }
      });
  };

  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold">Signin Form</div>
      <div className="">
        <form className="pt-10" onSubmit={login}>
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="email"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="block m-auto w-1/4 text-left mb-2">{emailError}</div>
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="password"
            name="pass"
            placeholder="Password"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="block m-auto w-1/4 text-left mb-2">{passError}</div>
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
};

export default SignIn;
