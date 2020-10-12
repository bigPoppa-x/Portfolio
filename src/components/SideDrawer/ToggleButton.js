import React from "react";
import "./ToggleButton.css";

const toggleButton = (props) => {
  return (
    <button className="toggle_button" onClick={props.onToggleClick}>
      <div className="toggle_button-line" />
      <div className="toggle_button-line" />
      <div className="toggle_button-line" />
    </button>
  );
};

export default toggleButton;
