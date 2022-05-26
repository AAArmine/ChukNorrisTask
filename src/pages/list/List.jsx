import React from "react";
import { Link } from "react-router-dom";
import { MainContainer } from "../../components/custom/wrappers/MainContainer/MainContainer";
import "./List.scss";

export const List = () => {
  return (
    <section className="favorite-jokes">
      <MainContainer>
        <Link to="/">Go back</Link>
        <div> List page</div>
      </MainContainer>
    </section>
  );
};
