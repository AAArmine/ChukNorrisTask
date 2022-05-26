import React from "react";
import "./Footer.scss";
import { FaReact } from "react-icons/fa";
import { FaIcons } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";

//because <InCodeWeTrust /> is rendering as a component:)
const returnSlogan = () => {
  return "<InCodeWeTrust />";
};
const getYear = () => {
  const d = new Date();
  let year = d.getFullYear();
  return year;
};
export const Footer = () => {
  return (
    <section className="footer-sec">
      <div className="footer-content">
        <h1>{returnSlogan()}</h1>
        <h4 className="mt-2">USED TECHNOLOGIES/LIBRARIES</h4>
        <div className="mt-1">
          <span>React JS</span> <FaReact size="1.5rem" />
        </div>
        <div className="mt-1">
          <span>SASS/SCSS</span> <FaSass size="1.5rem" />
        </div>
        <div className="mt-1">
          <span>AXIOS</span> <AiOutlineApi size="1.5rem" />
        </div>
        <div className="mt-1">
          <span>React-Router-Dom</span> <FaReact size="1.5rem" />
        </div>
        <div className="mt-1">
          <span>React-Icons</span> <FaIcons size="1.3rem" />
        </div>
        <div className="mt-1 copyright">
          <FaRegCopyright />
          <span>{getYear()} AA Armine, Yerevan Armenia</span>
        </div>
      </div>
    </section>
  );
};
