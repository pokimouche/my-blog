import React from "react";
import Link from "./Link";

const NavigationMenu = props => {
  return (
    <nav className="menu">
      <ul className="left-nav">
        <li>
          <Link url="#" name="Link"></Link>
        </li>
        <li>
          <Link url="#" name="Link"></Link>
        </li>
        <li>
          <Link url="#" name="Link"></Link>
        </li>
      </ul>

      <ul className="right-nav">
        <li>
          <Link url="#" name="Link"></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
