import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JokesContext } from "../../App";
import { CustomButton } from "../../components/buttons/customButton/CustomButton";
import { MainContainer } from "../../components/custom/wrappers/MainContainer/MainContainer";
import "./List.scss";
import rightArrow from "../../assets/images/rightArrow.gif";
import { BsChatQuote } from "react-icons/bs";
import { MainButton } from "../../components/buttons/mainButton/MainButton";

export const List = () => {
  const { list, dispatch } = useContext(JokesContext);
  const removeJoke = (elId) => {
    dispatch({
      type: "REMOVE_JOKE",
      joke: { id: elId },
    });
  };
  const clearList = () => {
    console.log("clear");
    dispatch({
      type: "CLEAR_LIST",
    });
  };
  return (
    <section className="favorite-jokes">
      <MainContainer>
        <Link to="/">
          <CustomButton text="Go Back" addClass="link-button" />
          <img className="right-arrow" src={rightArrow} alt="Chuk Norris" />
        </Link>
        <div className="favorites-cont">
          {list.length > 0 ? (
            <>
              <h1>My favorite jokes list</h1>
              <MainButton handleClick={clearList} text="Clear the List" />
            </>
          ) : (
            <h1>Go back to add jokes to my favorite jokes</h1>
          )}
          <ul>
            {list.map((joke) => (
              <li>
                <BsChatQuote size="2em" color="#f15a24" />
                <div className="joke">{joke.value}</div>
                <CustomButton
                  text="remove"
                  addClass="remove"
                  clickFunction={() => removeJoke(joke.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </MainContainer>
    </section>
  );
};
