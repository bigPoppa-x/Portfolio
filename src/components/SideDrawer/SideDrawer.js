import React from "react";
import { Link } from "react-router-dom";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let drawerClasses = "side_drawer";
  if (props.isDrawerOpen) {
    drawerClasses = "side_drawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link to="/" >
          <li onClick={props.handleSideDrawerLinkClick}>Home</li>
        </Link>
        <Link to="/about">
          <li onClick={props.handleSideDrawerLinkClick}>About</li>
        </Link>
        <Link to="/projects">
          <li onClick={props.handleSideDrawerLinkClick}>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li onClick={props.handleSideDrawerLinkClick}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawer;
