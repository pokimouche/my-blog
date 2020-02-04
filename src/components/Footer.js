import React from "react";

const Footer = props => {
  return (
    <footer>
      <a href={props.url}>{props.name}</a>
    </footer>
  );
};

export default Footer;
