import { Fragment } from "react";
import Channel from "./Channel";
import CardCol from "./CardCol";
import "./channel.css"

function GameProduct() {
  return (
    <Fragment>
    <div className="bg-img"></div>
      <section className="products">
        <Channel />
        <CardCol />
      </section>
    </Fragment>
  );
}

export default GameProduct;
