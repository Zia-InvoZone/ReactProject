import React from "react";
import Select from "react-select";

function Cselect() {
  const options = [
    { value: "Big Mac", label: "Big Mac" },
    { value: "Spicy McCrispy", label: "Spicy McCrispy" },
    { value: "Cheese Burger", label: "Cheese Burger" },
  ];

  return (
    <div className="w-1/2 float-left p-10">
      <div className="text-left mb-2 block text-lg font-bold">
        Select you deal
      </div>
      <Select options={options} />
    </div>
  );
}

export default Cselect;
