import { Fragment } from "react";
import SliderData from "./SliderData";
import Slider from "./Slider";
import "./slider.css";
import "./sliderData.css";
import GameProduct from "./GameProduct";
import NewsLater from "./NewsLater";

function Index() {
  return (
    <Fragment>
      <section className="hero">
        <Slider />
        <SliderData />
      </section>
      <GameProduct />
      <NewsLater />
    </Fragment>
  );
}

export default Index;
