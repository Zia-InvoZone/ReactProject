import React from "react";
import data from "./data";

function dealbox() {
  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
      {data.map((box, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="p-5 shadow-md">
          <img src={box.imagelink} alt={box.imagealt} />
          <button type="button" className="bg-black text-white m-auto p-2">
            {box.buttontext}
          </button>
        </div>
      ))}
    </div>
  );
}

export default dealbox;
