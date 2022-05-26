import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { JokesContext } from "../../App";
import { CustomButton } from "../../components/buttons/customButton/CustomButton";
import { MainContainer } from "../../components/custom/wrappers/MainContainer/MainContainer";
import "./List.scss";
import rightArrow from "../../assets/images/rightArrow.gif";
import { BsChatQuote } from "react-icons/bs";

export const List = () => {
  const { list, dispatch } = useContext(JokesContext);
  const removeJoke =(elId) =>{
     dispatch({
       type: "REMOVE_JOKE",
       joke: { id: elId },
     });
  }
  return (
    <section className="favorite-jokes">
      <MainContainer>
        <Link to="/">
          <CustomButton text="Go Back" addClass="link-button" />
          <img className="right-arrow" src={rightArrow} alt="Chuk Norris" />
        </Link>
        <div className="favorites-cont">
          <h1>
            {list.length > 0
              ? "My faforite jokes list"
              : "Go back to add jokes to my favorite jokes"}
          </h1>
          <ul>
            {list.map((joke) => (
              <li>
                <BsChatQuote size="2em" color="#f15a24" />
                <div className="joke">{joke.value}</div>
                <CustomButton text="remove" addClass="remove" clickFunction={()=>removeJoke(joke.id)}/>
              </li>
            ))}
          </ul>
        </div>
      </MainContainer>
    </section>
  );
};
