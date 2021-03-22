import React from "react";
import { useDispatch } from "react-redux";
import { Addproduct } from "./actions";
import data from "./data";

function Dealbox() {
  const dispatch = useDispatch();

  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
      {data.map((box, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className="p-5 shadow-md">
          <img src={box.imagelink} alt={box.imagealt} />
          <div className="m-auto p-2">
            {box.name}
            <br />
            {box.price}
          </div>
          <button
            p-id={box.id}
            type="button"
            className="bg-black text-white m-auto p-2"
            onClick={() => {
              // const pid = Number(e.currentTarget.getAttribute("p-id"));
              // if (pid != null) {
              dispatch(Addproduct(box));
              // }
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Dealbox;
