import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "absolute", right: "2rem", zIndex: 1000}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", position: "absolute", left: "2rem", zIndex: 1000 }}
        onClick={onClick}
      />
    );
  }

 const arrContent = [
    {
      title: "SUMMER COLLECTION",
      image: "./displayMain.png",
    },
    {
      title: "SUMMER COLLECTION 2",
      image: "./displayMain.png",
    },
    {
      title: "SUMMER COLLECTION 3 ",
      image: "./displayMain.png",
    },
  ]

  return (
    <>
      <Slider {...settings} style = {{position: "relative",}}>
      {arrContent.map((e, i) => (
            <React.Fragment key={i}>
        <div className="carouselImage">
          <img src = {e.image} className="carouselMainImage" width="100%" />
          <div className="carouselText" >
          <h1 className={`mainHeading`} > {e.title}</h1>
          </div>
        </div>
         </React.Fragment>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
