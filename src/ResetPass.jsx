/* eslint-disable no-alert */
import React, { useState } from "react";
import { firebaseApp } from "./firebase";

function ResetPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleReset = (e) => {
    e.preventDefault();
    setError("");

    firebaseApp
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Please check your email.");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold mb-4">Reset Password</div>
      <form onSubmit={handleReset}>
        <input
          className="block m-auto border p-2 w-1/4 mb-4"
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="block m-auto w-1/4 text-left mb-2">{error}</div>
        <input
          className="bg-black text-white w-1/4 p-2"
          type="submit"
          value="Reset Password"
        />
      </form>
    </div>
  );
}
export default ResetPass;
