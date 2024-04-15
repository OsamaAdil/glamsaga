import style from "./product.module.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { fetchProducts } from "@/components/api";
import ProductCard from "../ProductCard/ProductCard";

SwiperCore.use([Navigation, Pagination]);

export function Product({ type }) {
  const [products, setProducts] = useState([]);
  let [k, setK] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const variants = await fetchProducts();
        setProducts(variants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    if (window.innerWidth > 1024) {
      setK(4);
    } else if (window.innerWidth > 800) {
      setK(3);
    } else if (window.innerWidth > 500) {
      setK(2);
    }
  }, []);

  const filteredArray = products.filter((product) =>
    product.flag.includes(type)
  );

  return (
    <div className={style.productContainer}>
      <Swiper
        className={style.swiperContainer}
        spaceBetween={10}
        slidesPerView={k}
        navigation
      >
        {filteredArray.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={style.productSlide}>
              <ProductCard product={product} index={index} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
