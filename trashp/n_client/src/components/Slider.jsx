import { Fragment, useState } from "react";
import { Circle, CircleDot } from "lucide-react"

const S_IMG = [
  {
    url: "https://i.ytimg.com/vi/bGrvbbZZYyM/maxresdefault.jpg",
    alt: "OpenWorld",
  },
  {
    url: "https://videos-rockstargames-com.akamaized.net/screencaps/666666/_global/1920.jpg?im=Resize=1280",
    alt: "GrandTheftAuto5",
  },
  {
    url: "https://videos-rockstargames-com.akamaized.net/screencaps/12427/_global/1920.jpg?im=Resize=1280",
    alt: "DragRaces",
  },
  {
    url: "https://videos-rockstargames-com.akamaized.net/screencaps/12426/_global/1920.jpg?im=Resize=1280",
    alt: "GrandTheftAuto4",
  },
];

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  // function showNextImage() {
  //   setImageIndex((index) => {
  //     if (index === S_IMG.length - 1) return 0;
  //     return index + 1;
  //   });
  // }

  // function showPrevImage() {
  //   setImageIndex((index) => {
  //     if (index === 0) return S_IMG.length - 1;
  //     return index - 1;
  //   });
  // }
  return (
    <Fragment>
      <section
        aria-label="Image Slider"
        style={{ width: "65%", height: "700px", position: "relative", display: "flex", alignItems:"center", justifyContent:"start" }}
      >
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",

          }}
        >
          {S_IMG.map((img, index) => (
            <img
              key={img.url}
              src={img.url}
              alt={img.alt}
              aria-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%`, objectFit: "cover" }}
            />
          ))}
        </div>
        {/* <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft aria-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <ArrowBigRight aria-hidden />
        </button> */}
        <div
          style={{
            position: "absolute",
            bottom: ".5rem",
            right: "-40%",
            translate: "-50%",
            display: "flex",
            gap: ".25rem",
          }}
        >
          {S_IMG.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <CircleDot aria-hidden />
              ) : (
                <Circle aria-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="after-image-slider-controls" />
      </section>
    </Fragment>
  );
}

export default Slider;
