import React, { useContext, useState, useEffect } from "react";
import { BsChatQuote } from "react-icons/bs";
import "../Home.scss";
import chuckNorris from "../../../assets/images/chuckNorris.gif";
import checked from "../../../assets/icons/checked.png";
import completed from "../../../assets/icons/completed.png";
import { CustomButton } from "../../../components/buttons/customButton/CustomButton";
import { JokesContext } from "../../../App";

export const GetRandomJoke = ({ randomData }) => {
  const [added, setAdded] = useState(false);
  const { dispatch, list } = useContext(JokesContext);
  const clickFunction = () => {
    if (!added) {
      dispatch({
        type: "ADD_TO_LIST",
        joke: { id: randomData.id, value: randomData.value },
      });
      console.log("list: ", list);
      setAdded(true);
    } else {
      //code to delete item
      setAdded(false);
    }
  };
  useEffect(() => {
    setAdded(false);
  }, [randomData]);
  return (
    <div className="joke-container">
      <BsChatQuote size="2em" color="#f15a24" />
      <div className="joke">
        <div>{randomData.value}</div>
      </div>
      <div className="w-100">
        <div className="gif-cont">
          {added ? (
            <img src={completed} alt="Checked" />
          ) : (
            <img src={chuckNorris} alt="Chuck Norris" />
          )}
        </div>
        <CustomButton
          text={added ? "Remove" : "Ad to favorites"}
          addClass={added ? "remove" : ""}
          clickFunction={clickFunction}
        />
      </div>
    </div>
  );
};
