import React, { Component } from "react";
import Slider from "react-slick";
import styles from "../../../styles/Home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";


const CardComponent = ({ name, url, data }) => {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="mainwrap">
        <div className="subHeading"> {name} </div>
        <Slider {...settings} className={styles.slider}>
          {data.map((e, i) => (
            <React.Fragment key={i}>
              {/* <Card e={e} i={i} url={url} /> */}
            </React.Fragment>
          ))}
        </Slider>
        <div>
          <Link href={`/${url}`} className={styles.viewAll}>
            view all <span id={styles.arrow}> &#8594; </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
