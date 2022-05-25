import React from "react";
import "./MainButton.scss";

export const MainButton = ({ text, handleClick }) => {
  return (
    <button className="main-button" onClick={handleClick}>
      {text}
    </button>
  );
  
};
