import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiChukNorris } from "../../api/chukNorrisApi";
import { MainButton } from "../../components/buttons/mainButton/MainButton";
import { MainContainer } from "../../components/custom/wrappers/MainContainer/MainContainer";
import "./Home.scss";
import rightArrow from "../../assets/images/rightArrow.gif";
import { BsChatQuote } from "react-icons/bs";

export const Home = () => {
  const [randomData, setRandomData] = useState("");
  // useEffect(() => {
  //   getASingleJoke();
  // }, []);
  const getASingleJoke = () => {
    apiChukNorris.get("jokes/random").then((res) => {
      setRandomData(res.data);
    });
  };
  return (
    <section className="homepage-sec">
      <MainContainer>
        <Link to="/list">Go to favorite jocks list</Link>
        <img className="right-arrow" src={rightArrow} alt="Chuk Norris" />
        <div className="mt-2">
          <div className="content">
            {randomData === "" ? (
              ""
            ) : (
              <div className="joke-container">
                <BsChatQuote size="2em" color="#f15a24" className="mt-1" />
                <div className="joke mt-1">
                  <div>{randomData.value}</div>
                </div>
                <div className="w-100 mt-1">
                  <MainButton
                    text="Send joke"
                    // handleClick={getASingleJoke}
                  />
                </div>
              </div>
            )}

            <div className="mt-2">
              <MainButton
                text="Get a single random joke"
                handleClick={getASingleJoke}
              />
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
