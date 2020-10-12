import React, { useState } from "react";
import "./Toolbar.css";
import ToogleButton from "../SideDrawer/ToggleButton";
import { Link } from "react-router-dom";

const Toolbar = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const onHoverImage = () => {
    setIsHovered(!isHovered);
  };

  const onLeaveImage = () => {
    setIsHovered(!isHovered);
  };

  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <ToogleButton onToggleClick={props.handleDrawerToggle} />
        </div>
        <div
          className="toolbar_logo"
          onMouseOver={onHoverImage}
          onMouseLeave={onLeaveImage}
        >
          <Link to="/">
            <img
              className="toolbar_logo-img"
              src={
                isHovered
                  ? require("../../img/aplogo1.png")
                  : require("../../img/aplogo.png")
              }
            />
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <Link to="/">
              <li className="active">Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/projects">
              <li>Portfolio</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
