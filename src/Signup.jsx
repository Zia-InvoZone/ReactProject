/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { db } from "./firebase";

function signup() {
  const [url, setUrl] = useState("");
  const [dob, setDob] = useState("");
  const [bio, setBio] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [nav, setNav] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    if (nav === 0) {
      setNav(nav + 1);
    } else {
      const data = {
        Name: name,
        Pass: pass,
        Email: email,
        Image: url,
        Dob: dob,
        Bio: bio,
      };
      db.collection("Users")
        .add(data)
        .then(() => {
          // eslint-disable-next-line no-alert
          alert("Your information saved successfully!");
        });
    }
  }

  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold mb-4">Signup Form</div>
      <div className="">
        <form onSubmit={handleSubmit}>
          {nav === 0 && (
            <Step1
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              pass={pass}
              setPass={setPass}
            />
          )}
          {nav === 1 && (
            <Step2
              dob={dob}
              setDob={setDob}
              setUrl={setUrl}
              bio={bio}
              setBio={setBio}
            />
          )}
          <div className="w-1/4 m-auto overflow-hidden block">
            {nav === 1 && (
              <div
                className="p-2 w-20 bg-black text-white float-left mb-4"
                onClick={() => setNav(nav - 1)}
              >
                Prev
              </div>
            )}
            {nav === 0 && (
              <button
                type="submit"
                className="p-2 w-20 bg-black text-white float-right"
              >
                Next
              </button>
            )}
          </div>
          {nav === 1 && (
            <input
              className="bg-black text-white w-1/4 p-2"
              type="submit"
              value="submit"
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default signup;