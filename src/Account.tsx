import React from "react";
import { useSelector } from "react-redux";
// import { db } from "./firebase";

function Account() {
  const isloggedIn = useSelector((state: any) => state.isloggedIn);
  const { email } = isloggedIn.userData;

  // fire();
  // alert(email);
  // const users = db
  //   .collection("Users")
  //   .where("Email", "==", "zia.saleem@invozone.com")
  //   .get();
  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold">Account</div>
      <div className="">{email}</div>
      {/* {console.log(users)} */}
    </div>
  );
}
export default Account;
