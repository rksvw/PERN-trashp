import { Fragment, useEffect, useState } from "react";
import Releases from "./Releases";
import "./release.css";

const api_key = "8e5ab8c0d90445c49714b423bf53c004";
const query = "popular in 2024";
const url = `https://api.rawg.io/api/games?search=${query}&key=${api_key}`;

function CardCol() {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);

  const gameAPI = async () => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gameAPI().then((data) => {
      setGameData(data);
      setLoading(false);
    });
  }, []);

  return (
    <Fragment>
    {loading ? (
        <p>Loading...</p>
      ) : (
        <Releases data={gameData} />
      )}
    </Fragment>
  );
}

export default CardCol;
