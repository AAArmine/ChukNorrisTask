import React from "react";
import { BsChatQuote } from "react-icons/bs";
import "../Home.scss";
import chuckNorris from "../../../assets/images/chuckNorris.gif";
import { CustomButton } from "../../../components/buttons/customButton/CustomButton";

export const GetRandomJoke = ({ randomData }) => {
  const clickFunction=()=>{
    console.log("This text; ", randomData.value );
  }
  return (
    <div className="joke-container">
      <BsChatQuote size="2em" color="#f15a24" />
      <div className="joke">
        <div>{randomData.value}</div>
      </div>
      <div className="w-100">
        <div className="gif-cont">
          <img src={chuckNorris} alt="Chuck Norris" />
        </div>
        <CustomButton text="Add the joke to the favorites" clickFunction={clickFunction}/>
      </div>
    </div>
  );
};
