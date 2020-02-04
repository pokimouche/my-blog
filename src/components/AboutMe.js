import React from "react";
import ItemTitle from "./ItemTitle";

const AboutMe = props => {
  return (
    <div className="about-me">
      <ItemTitle name={props.name}></ItemTitle>
      <div className="description-box"></div>
      <p>{props.text}</p>
    </div>
  );
};

export default AboutMe;
