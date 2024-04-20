import { Fragment } from "react";
import SliderData from "./SliderData";
import Slider from "./Slider";
import "./slider.css";

function Index() {
  return (
    <Fragment>
      <section className="hero">
        <Slider />
        <SliderData />
      </section>
    </Fragment>
  );
}

export default Index;
