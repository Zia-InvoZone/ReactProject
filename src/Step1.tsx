/* eslint-disable react/prop-types */
import React from "react";

function Step1({
  name,
  setName,
  email,
  setEmail,
  pass,
  setPass,
  emailError,
  passError,
}: {
  name: string;
  setName: Function;
  email: string;
  setEmail: Function;
  pass: string;
  setPass: Function;
  emailError: string;
  passError: string;
}) {
  return (
    <div>
      <input
        className="block m-auto border p-2 w-1/4 mb-4"
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="block m-auto border p-2 w-1/4 mb-4"
        type="password"
        name="pass"
        value={pass}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        required
      />
      <div className="block m-auto w-1/4 text-left mb-2">{passError}</div>
      <input
        className="block m-auto border p-2 w-1/4 mb-4"
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="block m-auto w-1/4 text-left mb-2">{emailError}</div>
    </div>
  );
}

export default Step1;
