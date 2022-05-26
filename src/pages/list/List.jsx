import React from "react";
import { Link } from "react-router-dom";
import "./List.scss";

export const List = () => {
  return (
    <div>
      <Link to="/">Go back</Link>
      <div> List page</div>
    </div>
  );
};
