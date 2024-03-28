"use client";
import style from "./productcard.module.css";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/redux/features/cartSlice";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchProductVariants } from "@/components/api";

export default function ProductCard({ product, index }) {
  const [productVariant, setProductVariant] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const variants = await fetchProductVariants();
        setProductVariant(variants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const dispatch = useDispatch();

  function addToCart(product) {
    const variant = productVariant.find(
      (item) => item.productId === product._id
    );
    dispatch(addItemToCart({ product, variant }));
  }

  return (
    <div className={style.containerr}>
      <div>
        <Link key={product.id} href={`/products/${product._id}`} passHref>
          <img src={"/bag.png"} alt={`Product ${index}`} />{" "}
        </Link>
        <div className={style.discount}> {``}</div>
      </div>
      <div>{product.title} &nbsp;</div>
      <div>
        <div className={style.cost}>
          &#8377;
          {Math.round(product.price * (1 - product.discountPercent / 100))}{" "}
          &nbsp;
          <span>&#8377;{product.price}</span>
        </div>
      </div>{" "}
      <button
        className={style.button}
        onClick={() => {
          addToCart(product);
        }}
      >
        Add to Cart
      </button>
      <div className={style.discountPercent}>-{product.discountPercent}%</div>
      <div></div>
      <div className={style.star}>
        {product.rating}
        <img src="/star.svg" className={style.ratingImg} />
      </div>
    </div>
  );
}
