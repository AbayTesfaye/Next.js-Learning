"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientSideFunction from "../utils/client-utils";

const SimpleSlider = () => {
  const client = ClientSideFunction();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <p>{client}</p>
      <Slider {...settings}>
        <div>
          <img
            src="https://picsum.photos/800/400"
            alt="Slide 1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/800/400?random=1"
            alt="Slide 2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div>
          <img
            src="https://picsum.photos/800/400?random=2"
            alt="Slide 3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
