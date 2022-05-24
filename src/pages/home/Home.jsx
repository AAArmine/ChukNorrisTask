import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiChukNorris } from "../../api/chukNorrisApi";

export const Home = () => {
  const [randomData, setRandomData] = useState("");
  const getJokesData = () => {
    apiChukNorris.get("jokes/random").then((res) => {
      setRandomData(res.data);
    });
  };
  useEffect(() => {
    getJokesData();
  }, []);

  return (
    <div>
      <div>Joke random: {randomData.value}</div>
      <Link to="/list">Go to favorite jocks list</Link>
    </div>
  );
};
