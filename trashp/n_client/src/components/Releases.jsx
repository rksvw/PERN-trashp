import { Fragment } from "react";
import "./release.css";

function Releases({ data }) {
  // const game = this.props.gameData
  return (
    <Fragment>
      <div className="game-panel">
        {data.results.map((gm, index) => {
          return (
            <div key={index} className="cards">
              <img
                src={gm.background_image}
                alt={gm.name}
                className="card-img"
              />
              <div className="card-title"><h4>{gm.name}</h4></div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Releases;
