import React, { useState } from 'react';

let useCSMhook = () => {
  const [toggle, setToggle] = useState(`YES`);
  return (
    <div>
      <p>{toggle}</p>
      <button
        className="bg-black pl-4 pr-4 pt-2 pb-2 text-white"
        onClick={() => {
          if (toggle == `YES`) {
            setToggle(`NO`);
          } else setToggle(`YES`);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
export default useCSMhook;
