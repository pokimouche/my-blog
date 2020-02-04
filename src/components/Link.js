import React from "react";

const Link = props => {
  return (
    <a href={props.url} className="link">
      {props.name}
    </a>
  );
};

export default Link;
