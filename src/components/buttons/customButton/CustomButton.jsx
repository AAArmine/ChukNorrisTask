import React from "react";
import "./CustomButton.scss";

export const CustomButton = ({ text, clickFunction, addClass }) => {
  return (
    <button className={`button-add-delete ${addClass}`} onClick={clickFunction}>
      {text}
      <div className="button-light" />
    </button>
  );
};
