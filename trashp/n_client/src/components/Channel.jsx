import { Fragment, useState } from "react";
// import Index from "./Index";

function Channel() {
  return (
    <Fragment>
      <div className="channel">
        <div className="channel-title">
          <h1>GREAT PS4 & PS5 GAMES OUT NOW OR COMMING SOON</h1>
        </div>
        <div className="channel-toggle">
          <div className="channel-toggle-bt">
            <button className={"re"}>
              <span>New releases</span>
            </button>
          </div>
          <div className="channel-toggle-bt">
            <button className={"so"}>
              <span>Comming soon</span>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Channel;
