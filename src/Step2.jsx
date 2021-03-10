/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { storage } from "./firebase";

function Step2({ dob, setDob, setUrl, bio, setBio }) {
  const [progress, setProgress] = useState(0);
  function storeImg(e) {
    const image = e.target.files[0];
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progresss = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progresss);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((urls) => {
            setUrl(urls);
          });
      }
    );
  }
  return (
    <div>
      <div className="block m-auto w-1/4 text-left mb-2">Enter your DOB:</div>
      <input
        className="block m-auto border p-2 w-1/4 mb-4"
        type="date"
        name="dob"
        placeholder="DOB"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        required
      />
      <div className="block m-auto w-1/4 text-left mb-2">Upload you image:</div>
      <input
        className="block m-auto border p-2 w-1/4 mb-4"
        type="file"
        name="pic"
        onChange={storeImg}
      />
      <progress value={progress} max="100" />

      <textarea
        className="block m-auto border p-2 w-1/4 mb-4"
        type="textarea"
        name="bio"
        value={bio}
        placeholder="BIO"
        onChange={(e) => setBio(e.target.value)}
        required
      />
    </div>
  );
}

export default Step2;
