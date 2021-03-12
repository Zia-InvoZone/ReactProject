import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { firebaseApp } from "./firebase";

function EnterPass() {
  const [err, setErr] = useState("");
  const [pass, setPass] = useState("");
  const { search } = useLocation();
  const code = new URLSearchParams(search).get("oobCode");
  const history = useHistory();

  function ResetPass(e) {
    e.preventDefault();
    setErr("");
    firebaseApp
      .auth()
      .confirmPasswordReset(code, pass)
      .then(() => {
        alert("Password is changed.");
        history.push("/signin");
      })
      .catch((errr) => {
        setErr(errr.message);
      });
  }

  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold mb-4">Reset Password</div>
      <form onSubmit={ResetPass}>
        <input
          className="block m-auto border p-2 w-1/4 mb-4"
          type="password"
          name="pass"
          placeholder="Enter your new password"
          required
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <div className="block m-auto w-1/4 text-left mb-2">{err}</div>
        <input
          className="bg-black text-white w-1/4 p-2"
          type="submit"
          value="Reset Password"
        />
      </form>
    </div>
  );
}
export default EnterPass;
