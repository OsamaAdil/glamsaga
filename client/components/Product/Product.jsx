"use client";
import style from "./product.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import core styles
import "swiper/css/navigation"; // Import navigation styles
import "swiper/css/pagination"; // Import pagination styles

import SwiperCore, { Navigation, Pagination } from "swiper/core"; // Import Swiper core
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlice";

import { baseURL } from "@/config/constant";
import { fetchProductVariants, fetchProducts } from "@/components/api";
// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function Product({ type }) {
  const [products, setProducts] = useState([]);
  const [productVariant, setProductVariant] = useState([]);
  const [productVariantId, setProductVariantId] = useState([]);
  let [k, setK] = useState(1);
  // const [cart, setCart] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProducts();
        const variants = await fetchProductVariants();
        // const response = await axios.get("http://localhost:4000/products");

        // const response = await axios.get(`${baseURL}products`);
        setProducts(response);
        setProductVariant(variants);
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
    product.Flag.includes(type)
  );

  function addToCart(product) {
    const variant = productVariant.find(
      (item) => item.productId === product._id
    );
    dispatch(addItemToCart({ product, variant }));
  }

  return (
    <>
      <Swiper
        className={style.container}
        spaceBetween={10}
        slidesPerView={k}
        navigation
      >
        {filteredArray.map((product, index) => (
          <SwiperSlide key={index}>
            <div className={style.containerr}>
              <div>
                <img src={"/bag.png"} alt={`Product ${index}`} />
                <div className={style.discount}> {``}</div>
              </div>
              <div>{product.title}</div>
              <div>
                <div className="cost">
                  Rs.
                  {Math.round(
                    product.price * (1 - product.discountPercent / 100) * 100
                  ) / 100}{" "}
                  <span>Rs{product.price}</span>
                </div>
                <div className={style.rating}> </div>
              </div>
              <div>
                <button
                  className={style.button}
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
