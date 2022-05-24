import React from "react";
import chuckNorrisLogo from "../../assets/images/chuckNorrisLogo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <section className="header-sec w-100">
      <div className="logo-container">
        <img src={chuckNorrisLogo} alt="Chuk Norris" />
      </div>
    </section>
  );
};
