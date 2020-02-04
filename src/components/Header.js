import React from "react";
import Baseline from "./Baseline";
import Title from "./Title";

const Header = props => {
  return (
    <div className="header">
      <Title name="My blog"></Title>
      <Baseline name="An awesome baseline"></Baseline>
    </div>
  );
};

export default Header;
