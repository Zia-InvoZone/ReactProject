import React from "react";
import Table from "./Table";
import Cselect from "./Cselect";
import UseCSMhook from "./UseCSMhook";
import Dealbox from "./Dealbox";
import slide from "./assets/images/Loyalty-Rewards.jpg";

const Home = () => (
  <div className="Home">
    <div className="slider">
      <div className="grid">
        <img src={slide} alt="hero" />
      </div>
    </div>

    <hr />
    <Dealbox />
    <div className="mt-10 max-w-screen-xl m-auto overflow-hidden block">
      <Table />
      <Cselect />
    </div>
    <UseCSMhook />
  </div>
);
export default Home;
