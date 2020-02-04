import React from "react";
import AboutMe from "./AboutMe";

const SideContent = props => {
  const text1 =
    "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit";

  return (
    <div className="side-content">
      <AboutMe name="ABOUT ME" text={text1}></AboutMe>
    </div>
  );
};

export default SideContent;
