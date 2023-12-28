import style from "./product.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

import SwiperCore, { Navigation, Pagination } from "swiper/core"; // Import Swiper core

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Product() {
  const [products, setProducts] = useState([]);
  let [k, setK] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });

    if (window.innerWidth > 1024) {
      setK(4);
    } else if (window.innerWidth > 800) {
      setK(3);
    } else if (window.innerWidth > 500) {
      setK(2);
    }
  }, []);

  return (
    <>
      <Swiper
        className={style.container}
        spaceBetween={10}
        slidesPerView={k}
        navigation
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={style.containerr}>
              <div>
                <img src={"/bag.png"} alt={`Product ${index}`} />
              </div>
              <div>{product.Title}</div>
              <div>
                <div className="cost">
                  Rs.{product.SellingPrice} <span>Rs{product.Price}</span>
                </div>
                <div className={style.rating}> </div>
              </div>
              <div>
                <button className={style.button}>Add to Cart</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
