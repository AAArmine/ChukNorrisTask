import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiChukNorris } from "../../api/chukNorrisApi";
import { MainButton } from "../../components/buttons/mainButton/MainButton";
import { MainContainer } from "../../components/custom/wrappers/MainContainer/MainContainer";
import "./Home.scss";
import rightArrow from "../../assets/images/rightArrow.gif";
import { GetRandomJoke } from "./getRandom/GetRandomJoke";
import { CustomButton } from "../../components/buttons/customButton/CustomButton";
import timer from "../../assets/icons/timer.gif";

export const Home = () => {
  const [randomData, setRandomData] = useState("");
  const [loadingRandomJoke, setLoadingRandomJoke] = useState(null);

  const [randomDataWithInterval, setRandomDataWithInterval] = useState("");
  const [startTimer, setStartTimer] = useState(false);
  const [timerId, setTimerId] = useState(0);
  const [loadingStartJoke, setLoadingStartJoke] = useState(null);

  const getASingleJoke = () => {
    setLoadingRandomJoke("loading");
    apiChukNorris.get("jokes/random").then((res) => {
      setRandomData(res.data);
      setLoadingRandomJoke("success");
    });
  };

  useEffect(() => {
    let interval = null;
    if (startTimer) {
      setLoadingStartJoke("loading");
      interval = setInterval(() => {
        apiChukNorris.get("jokes/random").then((res) => {
          setRandomDataWithInterval(res.data);
          // setLoadingRandomJoke("success");
          setTimerId(interval);
          setLoadingStartJoke("success");
        });
      }, 3000);
    } else {
      clearInterval(timerId);
    }
  }, [startTimer]);

  return (
    <section className="homepage-sec">
      <MainContainer>
        <Link to="/list">
          <CustomButton
            text="Go to favorite jocks list"
            addClass="link-button"
          />
          <img className="right-arrow" src={rightArrow} alt="Chuk Norris" />
        </Link>

        <div className="mt-2">
          <div className="content">
            {loadingRandomJoke === "success" ? (
              <GetRandomJoke randomData={randomData} />
            ) : (
              ""
            )}
            <div className="mt-2">
              {loadingRandomJoke === "loading" ? (
                <div className="loading">
                  <img
                    src="https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-13.gif"
                    alt="loading gif"
                  />
                </div>
              ) : (
                ""
              )}
              <MainButton
                text="Get a single random joke"
                handleClick={getASingleJoke}
              />
            </div>
            <div className="mt-2">
              {loadingStartJoke === "success" ? (
                <GetRandomJoke randomData={randomDataWithInterval} />
              ) : (
                ""
              )}
              <div className="mt-2">
                {loadingStartJoke === "loading" ? (
                  <div className="loading">
                    <img src={timer} alt="loading gif" />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {!startTimer ? (
                <MainButton
                  text="START getting a random joke every 3"
                  handleClick={() => setStartTimer(true)}
                />
              ) : (
                <MainButton
                  text="STOP"
                  handleClick={() => setStartTimer(false)}
                />
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
