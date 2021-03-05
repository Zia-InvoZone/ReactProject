import React from 'react';
import Table from './Table';
import Cselect from './Cselect';
import UseCSMhook from './UseCSMhook';
import slide from './assets/images/Loyalty-Rewards.jpg';
import Bimg1 from './assets/images/Spicy-Chicken-Burger-1-600x600.png';
import Bimg2 from './assets/images/Cheese-Burger-600x600.png';
import Bimg3 from './assets/images/Medium-Fries-1-600x600.png';

let Home = () => {
  return (
    <div className="Home">
      <div className="slider">
        <div className="grid">
          <img src={slide} alt="hero image" />
        </div>
      </div>

      <hr />
      <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
        <div className="p-5 shadow-md">
          <img src={Bimg1} alt="Bimg1" />
          <button className="bg-black text-white m-auto p-2">Order Now</button>
        </div>
        <div className="p-5 shadow-md">
          <img src={Bimg2} alt="Bimg2" />
          <button className="bg-black text-white m-auto p-2">Order Now</button>
        </div>
        <div className="p-5 shadow-md">
          <img src={Bimg3} alt="Bimg3" />
          <button className="bg-black text-white m-auto p-2">Order Now</button>
        </div>
      </div>
      <div className="mt-10 max-w-screen-xl m-auto overflow-hidden block">
        <div className="w-1/2 float-left p-10">
          <Table />
        </div>
        <div className="w-1/2 float-left p-10">
          <div className="text-left mb-2 block text-lg font-bold">
            Select you deal
          </div>
          <Cselect />
        </div>
      </div>
      <UseCSMhook />
    </div>
  );
};
export default Home;
