import React, { useState } from 'react';

let useCSMhook = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <p>{toggle ? 'true' : 'false'}</p>
      <button
        className="bg-black pl-4 pr-4 pt-2 pb-2 text-white"
        onClick={() => {
          if (toggle) {
            setToggle(false);
          } else setToggle(true);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
export default useCSMhook;
