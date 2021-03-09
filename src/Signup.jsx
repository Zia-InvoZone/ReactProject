/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { db } from "./firebase";

function signup() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    const data = {
      Name: name,
      Pass: pass,
      Email: email,
      Country: country,
      Phone: phone,
    };
    db.collection("Users")
      .add(data)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Your information saved successfully!");
      });
    event.preventDefault();
  }

  return (
    <div className="pt-40 max-w-screen-xl m-auto">
      <div className="text-lg font-bold">Signup Form</div>
      <div className="">
        <form onSubmit={handleSubmit} className="pt-10">
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
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
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            className="block m-auto border p-2 w-1/4 mb-4"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            name="country"
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Canada">Canada</option>
          </select>
          <input
            className="block m-auto border p-2 w-1/4 mb-4"
            type="number"
            name="phone"
            value={phone}
            placeholder="Phone"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            className="bg-black text-white w-1/4 p-2"
            type="submit"
            value="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default signup;
