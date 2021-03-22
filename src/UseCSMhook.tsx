import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { toggleChk } from "./actions";

const useCSMhook = () => {
  const toggle = useSelector((state: any) => state.toggleData);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{toggle.State ? "true" : "false"}</p>
      <button
        type="submit"
        className="bg-black pl-4 pr-4 pt-2 pb-2 text-white"
        onClick={() => dispatch({ type: "Toggle", ApiData: "" })}
      >
        Toggle
      </button>
    </div>
  );
};
export default useCSMhook;
