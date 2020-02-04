import React from "react";
import MainContent from "./MainContent";
import SideContent from "./SideContent";

const Content = props => {
  return (
    <div className="content">
      <MainContent></MainContent>
      <SideContent></SideContent>
    </div>
  );
};

export default Content;
