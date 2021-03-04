import React from 'react';
import Select from 'react-select';

function Cselect() {
  const options = [
    { value: 'Big Mac', label: 'Big Mac' },
    { value: 'Spicy McCrispy', label: 'Spicy McCrispy' },
    { value: 'Cheese Burger', label: 'Cheese Burger' },
  ];

  return <Select options={options} />;
}

export default Cselect;
